let SpaceAge = function(seconds){
        this.seconds = seconds;
        this.earthYear = 31557600;
    }

    SpaceAge.prototype.onEarth = function () {
        earYear = this.earthYear;
        return Number((this.seconds/earYear).toFixed(2));
    }

    SpaceAge.prototype.onMercury = function () {
        mercYear = 0.2408467 * this.earthYear;
        return Number((this.seconds/mercYear).toFixed(2));
    }

    SpaceAge.prototype.onVenus = function () {
        mercYear = 0.61519726 * this.earthYear;
        return Number((this.seconds/mercYear).toFixed(2));
    }

    SpaceAge.prototype.onMars = function () {
        mercYear = 1.8808158 * this.earthYear;
        return Number((this.seconds/mercYear).toFixed(2));
    }

    SpaceAge.prototype.onJupiter = function () {
        mercYear = 11.862615 * this.earthYear;
        return Number((this.seconds/mercYear).toFixed(2));
    }

    SpaceAge.prototype.onSaturn = function () {
        mercYear = 29.447498 * this.earthYear;
        return Number((this.seconds/mercYear).toFixed(2));
    }

    SpaceAge.prototype.onUranus = function () {
        mercYear = 84.016846 * this.earthYear;
        return Number((this.seconds/mercYear).toFixed(2));
    }

    SpaceAge.prototype.onNeptune = function () {
        mercYear = 164.79132 * this.earthYear;
        return Number((this.seconds/mercYear).toFixed(2));
    }


    module.exports = SpaceAge;



