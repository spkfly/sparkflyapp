import { FormControl } from '@angular/forms';

export class UsernameValidator {
    static validUsername(fc: FormControl) {
        if (fc.value.toLowerCase()==="abc123" || fc.value.toLowerCase()==="123abc") {
            return {
                validUsername: true
            };
        } else {
            return null;
        }
    }
}
//Change these values to check usernames with API