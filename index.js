const nums = document.getElementsByClassName("num-btn");
console.log(nums)

function makeActive(idx) {
   var focus_item = nums.item(idx)
   var currently_sel = document.getElementsByClassName("selected");
   if (currently_sel.length > 0) {
    currently_sel = currently_sel.item(0);
    console.log(currently_sel);
    currently_sel.classList.remove("selected");
   }
   focus_item.classList.add("selected")
}

function submitForm() {
    var currently_sel = document.getElementsByClassName("selected");
    if (currently_sel.length > 0) {
        currently_sel = currently_sel.item(0);
        console.log(currently_sel.innerHTML);
        rating = document.getElementsByClassName("ty-rate").item(0);
        rating.innerHTML = `You selected ${currently_sel.innerHTML} out of 5`;
        document.getElementsByClassName("thank-you").item(0).classList.remove("inactive");
        document.getElementsByClassName("rating").item(0).classList.add("inactive");

    }
}