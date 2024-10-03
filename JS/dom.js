//********* Donation & History Button Switching **************
const btnDonation = document.getElementById("btn-donation")
const btnHistory = document.getElementById("btn-history")
    //--- History Button ---
    btnHistory.addEventListener("click", function(){
    document.getElementById("card-section").classList.add("hidden")
    document.getElementById("history-section").classList.remove("hidden")
    btnHistory.style.backgroundColor= "#B4F461"
    btnDonation.style.backgroundColor= "white"
    document.getElementById("warning").classList.add("hidden", "absolute");
    //No History Message
    const noHistory = document.getElementById("history-section").children.length;
        if(noHistory <= 0){
            document.getElementById("no-history").classList.remove("hidden");
            return
        }
        if(noHistory>=1){
            document.getElementById("no-history").classList.add("hidden");
        }
})
    // --- Donation Button ---
    btnDonation.addEventListener("click", function(){
    document.getElementById("history-section").classList.add("hidden")
    document.getElementById("card-section").classList.remove("hidden")
    btnHistory.style.backgroundColor= "white"
    btnDonation.style.backgroundColor= "#B4F461"

    document.getElementById("no-history").classList.add("hidden")
})


//************ function for "innerText" *************
function innerTextById (id){
    return parseFloat(document.getElementById(id).innerText);
}

let noakhaliDonation = innerTextById("noakhali-donation")
let feniDonation = innerTextById("feni-donation")
let quotaDonation = innerTextById("quota-donation")



//****************** Noakhali Donation *******************
document.getElementById("Noakhali-DonateNow").addEventListener("click", function(){
let balance = innerTextById("balance")
const noakhaliInput = parseFloat(document.getElementById("noakhali-input").value);

//noakhali validation
if(noakhaliInput<0 || isNaN(noakhaliInput)){
    alert("⚠️ Error: Invalid Input!");
    document.getElementById("noakhali-input").value = ""
    return
}
if(noakhaliInput>balance || typeof noakhaliInput === "string"){
    document.getElementById("warning").classList.remove("hidden", "absolute");
    document.getElementById("noakhali-input").value = ""
    return
}
document.getElementById("warning").classList.add("hidden", "absolute");

//noakhali modal
document.getElementById('my_modal_1').showModal()

//noakhali calculation
noakhaliDonation = noakhaliDonation + noakhaliInput
const noakhaliDonationFinal = document.getElementById("noakhali-donation")
noakhaliDonationFinal.innerText= noakhaliDonation.toFixed(2)

const newBalance = balance - (noakhaliInput);
const newBalanceFinal = document.getElementById("balance")
newBalanceFinal.innerText = newBalance.toFixed(2);
document.getElementById("noakhali-input").value = ""

//noakhali History
const historyItem = document.createElement ("div")
historyItem.className = "border rounded-xl p-3";

historyItem.innerHTML = `
<h2 class="font-semibold">${noakhaliDonation.toFixed(2)} Taka is Donate for Flood at Noakhali, Bangladesh</h2>
<p class="text-sm text-gray-500">Date: ${new Date().toLocaleString()}</p>
`
const historyContainer = document.getElementById("history-section")
historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})



//********************* feni Donation ***************************
document.getElementById("feni-DonateNow").addEventListener("click", function(){
let balance = innerTextById("balance")
const feniInput = parseFloat(document.getElementById("feni-input").value);

//feni validation
if(feniInput<0 || isNaN(feniInput)){
    alert("⚠️ Error: Invalid Input!");
    document.getElementById("feni-input").value = ""
    return
}
if(feniInput>balance || typeof feniInput === "string"){
    document.getElementById("warning").classList.remove("hidden", "absolute");
    document.getElementById("feni-input").value = ""
    return
}
document.getElementById("warning").classList.add("hidden", "absolute");

//feni modal
document.getElementById('my_modal_1').showModal()

//feni calculation
feniDonation = feniDonation + feniInput
const feniDonationFinal = document.getElementById("feni-donation")
feniDonationFinal.innerText= feniDonation.toFixed(2)

const newBalance = balance - (feniInput);
const newBalanceFinal = document.getElementById("balance")
newBalanceFinal.innerText = newBalance.toFixed(2);
document.getElementById("feni-input").value = ""

//feni History
const historyItem = document.createElement ("div")
historyItem.className = "border rounded-xl p-3";

historyItem.innerHTML = `
<h2 class="font-semibold">${feniDonation.toFixed(2)} Taka is Donate for Flood Relief in Feni,Bangladesh</h2>
<p class="text-sm text-gray-500">Date: ${new Date().toLocaleString()}</p>
`
const historyContainer = document.getElementById("history-section")
historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})



//****************** Quota Donation ********************
document.getElementById("quota-DonateNow").addEventListener("click", function(){
let balance = innerTextById("balance")
const quotaInput = parseFloat(document.getElementById("quota-input").value);

//quota validation
if(quotaInput<0 || isNaN(quotaInput)){
    alert("⚠️ Error: Invalid Input!");
    document.getElementById("quota-input").value = ""
    return
}
if(quotaInput>balance || typeof quotaInput === "string"){
    document.getElementById("warning").classList.remove("hidden", "absolute");
    document.getElementById("quota-input").value = ""
    return
}
document.getElementById("warning").classList.add("hidden", "absolute");

//quota modal
document.getElementById('my_modal_1').showModal()

//quota calculation
quotaDonation = quotaDonation + quotaInput
const quotaDonationFinal = document.getElementById("quota-donation")
quotaDonationFinal.innerText= quotaDonation.toFixed(2)

const newBalance = balance - (quotaInput);
const newBalanceFinal = document.getElementById("balance")
newBalanceFinal.innerText = newBalance.toFixed(2);
document.getElementById("quota-input").value = ""

//quota History
const historyItem = document.createElement ("div")
historyItem.className = "border rounded-xl p-3";

historyItem.innerHTML = `
<h2 class="font-semibold">${quotaDonation.toFixed(2)} Taka is Aid for Injured in the Quota Movement</h2>
<p class="text-sm text-gray-500">Date: ${new Date().toLocaleString()}</p>
`
const historyContainer = document.getElementById("history-section")
historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

//------------------------------------------------------------------------



//************** Btn-Blog click to another page *****************
document.getElementById("btn-blog").addEventListener("click", function() {
    window.location.href = "blog.html";

// const balanceAmount = document.getElementById("balance").innerText
// localStorage.setItem("balanceAmount", balanceAmount)

});

