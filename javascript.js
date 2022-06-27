function CalQuota() {
    document.getElementById("CSTQuota").value = Math.ceil((document.getElementById("BESQuota").value / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8) * 100) / 100 + " GB";
}
function ResetCal() {
    document.getElementById("BESQuota").value = "";
    document.getElementById("CSTQuota").value = "";
}
function Thanks() {
    if (thanks.style.display === "none") {
        thanks.style.display = "block";
        document.getElementById("more").innerHTML = "˄";
    } else {
        thanks.style.display = "none";
        document.getElementById("more").innerHTML = "˅";
    }
}
