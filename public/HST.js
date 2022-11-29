
class HST{
    static calculate(sProv, nAmt){
        let rc = 0;
        switch(sProv){
            case "ON":
            case "MB":
                rc = nAmt *.13;
                break;
            case "AB":
                rc = nAmt *.05;
                break;
            case "SC":
                rc = nAmt *.15;
                break;
            case "QC":
                rc = nAmt *.14975;
                break;
            case "NS":
                rc = nAmt *.15;
                break;
            default:
                throw "invalid province";
        }
        return Number(rc.toFixed(2));
    }
}

module.exports = HST;