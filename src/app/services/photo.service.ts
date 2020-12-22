import { Injectable } from '@angular/core';
import {Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource} from '@capacitor/core';
import {Platform} from '@ionic/angular';

const {Camera, Filesystem, Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  public async addNewToGallery() {
    //Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
    const savedImageFile = await this.savePicture(capturedPhoto);
    //this.photos.unshift(savedImageFile);
    //Saves photos array
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });
  }

  private async savePicture(cameraPhoto: CameraPhoto) {
    //Convert photo to base64 format. This is required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);
    //Writing file to data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });
    //webPath displays new image because it's loaded into memory
    if (this.platform.is('hybrid')) { //detect mobile
      return {
        filePath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath
      };
    }
  }

  //Helper function to convert photo
  private async readAsBase64(cameraPhoto: CameraPhoto) {
    if (this.platform.is('hybrid')) { //hybrid detects cordova or capacitor for mobile
      const file = await Filesystem.readFile({
        path: cameraPhoto.path
      });
      return file.data;
    } else {
      const response = await fetch(cameraPhoto.webPath!); //fetch photo
      const blob = await response.blob(); //read as blob
      return await this.convertBlobToBase64(blob) as string; //convert to base64
    }
  }
  //promise for converting to base64
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  public async loadSaved() {
    //Retrieve cached photo array data
    const photoList = await Storage.get({key: this.PHOTO_STORAGE});
    this.photos = JSON.parse(photoList.value) || [];

    if (!this.platform.is('hybrid')) { //NOT mobile
      for (let photo of this.photos) { //loop through photos
        const readFile = await Filesystem.readFile({ //read each one's saved data from the Filesystem
          path: photo.filepath,
          directory: FilesystemDirectory.Data
        });
        photo.webviewPath = 'data:image/jpeg;base64,${readFile.data}';
      }
    }
  }

} //class end

export interface Photo {
  filepath: string;
  webviewPath: string;
}
