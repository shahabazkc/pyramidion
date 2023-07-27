class PasswordChecker {
    constructor(password) {
        this.password = password;
        this.missingTypes = 3;
        this.missingChar = 0;
        this.changes = 0;
        this.oneRepeating = 0;
    }

    validate() {
        if (!this.password || typeof this.password !== 'string') {
            throw new Error('Invalid password');
        }

        this.checkMissingTypes();
        this.checkRepeatingCharacters();
        this.calculateChanges();


        return this;
    }


    checkMissingTypes() {
        if (/[a-z]/.test(this.password)) this.missingTypes--;
        if (/[A-Z]/.test(this.password)) this.missingTypes--;
        if (/\d/.test(this.password)) this.missingTypes--;
    }

    checkRepeatingCharacters() {
        for (let i = 2; i < this.password.length; i++) {
            if (
                this.password[i] === this.password[i - 1] &&
                this.password[i] === this.password[i - 2]
            ) {
                let count = 2;
                while (
                    i < this.password.length &&
                    this.password[i] === this.password[i - 1]
                ) {
                    count++;
                    i++;
                }
                this.oneRepeating += Math.floor(count / 3);
            }
        }
    }

    calculateChanges() {
        if (this.password.length < 6) {
            this.missingChar += Math.max(6 - this.password.length, this.missingTypes);
        }
        else {
            let overLength = Math.max(this.password.length - 20, 0);
            this.missingChar -= overLength;

            let leftOverRepeating = Math.max(
                this.oneRepeating - overLength,
                0
            );
            this.changes += Math.floor((leftOverRepeating + 1) / 2);
        }
    }

    getResult() {
        if (this.missingChar >= this.missingTypes) {
            return this.missingChar + this.oneRepeating
        }
        else {
            return Math.abs(this.missingChar) + this.missingTypes
        }
    }
}

module.exports = PasswordChecker