
class Utils {

    avatars = ['iconavatar38','iconavatar27','iconavatar25','iconavatar11','iconavatar19','iconavatar12','iconavatar33','iconavatar02','iconavatar35','iconavatar08','iconavatar03','iconavatar24','iconavatar23','iconavatar26','iconavatar18','iconavatar06','iconavatar21','iconavatar01','iconavatar05','iconavatar15','iconavatar36','iconavatar32','iconavatar09','iconavatar39','iconavatar40','iconavatar07','iconavatar14','iconavatar34','iconavatar13','iconavatar10'];

    ellipsisAddress(address) {
        try {
            // if(Utils.isBase58(address) || account.isValidPk(address) || account.isValidPkr(address)){
            return address.substring(0, 8) + "..." + address.substring(address.length - 8);
            // }
        } catch (e) {
            return address;
        }
    }

    ellipsisHash(value) {
        try {
            return value.substring(0, 8) + "..." + value.substring(value.length - 8);
        } catch (e) {
            return value;
        }
    }

    isBase58(address) {
        try {
            // const reg = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
            // if(reg.test(address) || account.isValidPk(address) || account.isValidPkr(address)){
            return true;
            // }
        } catch (e) {
            return false
        }
        return false;
    }

    getRandomAvatar() {
        const i = Math.floor(Math.random() * (-8) + 8);
        return this.avatars[i];
    }

    formatDate(timestamp) {
        if(typeof timestamp === "string"){
            const d = new Date(parseInt(timestamp)*1000);
            return d.toLocaleDateString() + " " + d.toTimeString();
        }else{
            const d = new Date(timestamp*1000);
            return d.toLocaleDateString() + " " + d.toTimeString();
        }
    }


}

export default Utils

const utils = new Utils();
export {utils}