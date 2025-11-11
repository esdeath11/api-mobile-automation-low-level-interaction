
class GenerateRandomValue {
    setRandomValue(digit) {
        let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let randomValue = '';
        for (let i = 0; i < digit; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            randomValue += characters.charAt(randomIndex);
        }
        return randomValue;
    }

    setRandomCharacter(digit) {
        const characters = '#+<>,;=!@$%^&*()-_+=|][{}:<>.`~\'"';
        let randomValue = '';

        for (let i = 0; i < digit; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            randomValue += characters.charAt(randomIndex);
        }

        return randomValue;
    }

    generateValueBasedOnConfig({ digit, configValue }) {
        console.log(configValue)
        const characters = configValue;
        let randomValue = '';

        for (let i = 0; i < digit; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            randomValue += characters.charAt(randomIndex);
        }

        return randomValue;
    }

    generateDynamicValue(length) {
        let result = '';
        const characters = '0123456789';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    }

    getRandomValueDevice({
        inital
    }) {
        let firstCode = this.setRandomValue(6);
        let secondCode = this.setRandomValue(4);
        let thirdCode = this.setRandomValue(4);
        let fourthCode = this.setRandomValue(4);
        let fifthCode = this.setRandomValue(9);
        let result = inital + '-' + firstCode + '-' + secondCode + '-' + thirdCode + '-' + fourthCode + '-' + fifthCode;
        return result;
    }

    getRandomRateId(){
        let firstCode = this.setRandomValue(8);
        let secondCode = this.setRandomValue(4);
        let thirdCode = this.setRandomValue(4);
        let fourthCode = this.setRandomValue(12);
        let result = firstCode + '-' + secondCode + '-' + thirdCode + '-' + fourthCode;
        return result;
    }

    getRandomValueUser({
        inital
    }) {
        let firstCode = this.setRandomValue(17);
        let result = inital + firstCode;
        return result;
    }

    generatePhoneNumber({ initial }) {
        let phoneNumber = `${initial}`;
        for (let i = 0; i < 6; i++) {
            phoneNumber += Math.floor(Math.random() * 9);
        }

        return phoneNumber + "test";
    }

    formatTimestampWithFormat({ date, format }) {
        const formattedTimestamp = format
            .replace('YYYY', format.includes('YYYY') ? date.getFullYear() : '')
            .replace('MM', format.includes('MM') ? String(date.getMonth() + 1).padStart(2, '0') : '')
            .replace('DD', format.includes('DD') ? String(date.getDate()).padStart(2, '0') : '')
            .replace('HH24', format.includes('HH24') ? String(date.getHours()).padStart(2, '0') : '')
            .replace('MI', format.includes('MI') ? String(date.getMinutes()).padStart(2, '0') : '')
            .replace('SS', format.includes('SS') ? String(date.getSeconds()).padStart(2, '0') : '')
            .replace('FF', format.includes('FF') ? String(date.getMilliseconds()).padStart(3, '0') : '')
            .replace('TZHTZM', format.includes('TZHTZM') ? this.getFormattedTimeZoneOffset(date) : '');

        return formattedTimestamp;
    }

    getFormattedTimeZoneOffset(date) {
        const offsetMinutes = date.getTimezoneOffset();
        const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
        const offsetMinutesPart = String(Math.abs(offsetMinutes) % 60).padStart(2, '0');
        const offsetSign = offsetMinutes < 0 ? '+' : '-';

        return `${offsetSign}${String(offsetHours).padStart(2, '0')}${offsetMinutesPart}`;
    }

    setEmailAddress({ initial, digits }) {
        const randomNumber = Math.floor(Math.random() * Math.pow(10, digits));
        const formattedNumber = String(randomNumber).padStart(digits, '0');
        const email = `${initial}${formattedNumber}@mail.com`;
        return email;
    }

    generateZoloz() {
        const prefix = "G000000004FFC202308300000000"
        const randomSuffix = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');
        const result = prefix + randomSuffix;
        console.log(result);
        return result;
    }

    generateRCA() {
        const prefix = 'RCA';
        const zeros = '0000';
        const randomDigits = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
        const result = prefix + zeros + randomDigits;
        return result;
    }




    generateTransactionIDChangeProfile({CIF}) {
        let now = new Date();
        let date = this.formatTimestampWithFormat({
            date: now,
            format: 'YYYY-MM-DD HH24:MI:SS'
        });

        const formattedDate = date.replace(/[-: ]/g, "");

        let transactionID = 'MVK'+formattedDate+CIF

        return transactionID
    }

    generateLatLon() {
        const latitude = (Math.random() * 180) - 90;
        
        const longitude = (Math.random() * 360) - 180;
        
        return { "latitude":latitude , "longitude" :longitude};
    }



    generateRandomDOB() {
        const minYear = 1950;
        const maxYear = 2005;
        const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
      
        const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
      
        const maxDaysInMonth = new Date(year, month, 0).getDate();
        const day = String(Math.floor(Math.random() * maxDaysInMonth) + 1).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      }


}

const generateRandomValueInstance = new GenerateRandomValue();
export default generateRandomValueInstance;

