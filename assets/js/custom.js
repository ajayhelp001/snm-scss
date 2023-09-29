
    // *** Category Select ****
    $(document).ready(function () {
        // Initialize Select2
        $(".mySelect").select2({
        placeholder: "categories to filter",
        // allowClear: true
        });
       // Function to add a selected item
        function addSelectedItem(selectedOption) {
            var selectedItem = $("<div>").addClass("selected-item");        
            selectedItem.text(selectedOption.text);
            var closeIcon = $("<span>").addClass("close-icon").text("×");
    
            closeIcon.on("click", function () {
                selectedItem.remove();
                $(".mySelect option[value='" + selectedOption.id + "']").prop("selected", false);
                $(".mySelect").trigger("change");
            });
    
            selectedItem.append(closeIcon);
            $(".selectitemJs").append(selectedItem);
        }
    
        // Handle item selection
        $(".mySelect").on("select2:select", function (e) {
            var selectedOption = e.params.data;
            addSelectedItem(selectedOption);
        });
    
        // Handle item deselection
        $(".mySelect").on("select2:unselect", function (e) {
            var selectedOption = e.params.data;
            $(".selected-item").each(function () {
                if ($(this).text() === selectedOption.text) {
                    $(this).remove();
                }
            });
        });
        $(".mySelect").on("select2:unselect", function (e) {
            var selectedOption = e.params.data;
            $(".selected-item").each(function () {
                if ($(this).find('.close-icon').length > 0) {
                    var textWithoutCloseIcon = $(this).clone().children().remove().end().text().trim();
                    if (textWithoutCloseIcon === selectedOption.text) {
                        $(this).remove();
                    }
                }
            });
        });
    });
    //  ** Location Select *****
    $(document).ready(function () {
        // Initialize Select2
        $(".locationSelect").select2({
        placeholder: "location to filter ",
        // allowClear: true
        });
       // Function to add a selected item
        function addSelectedItem(selectedOption) {
            var selectedItem = $("<div>").addClass("selected-item");        
            selectedItem.text(selectedOption.text);
            var closeIcon = $("<span>").addClass("close-icon").text("×");
    
            closeIcon.on("click", function () {
                selectedItem.remove();
                $(".locationSelect option[value='" + selectedOption.id + "']").prop("selected", false);
                $(".locationSelect").trigger("change");
            });
    
            selectedItem.append(closeIcon);
            $(".locationitemJs").append(selectedItem);
        }
    
        // Handle item selection
        $(".locationSelect").on("select2:select", function (e) {
            var selectedOption = e.params.data;
            addSelectedItem(selectedOption);
        });
    
        // Handle item deselection
        $(".locationSelect").on("select2:unselect", function (e) {
            var selectedOption = e.params.data;
            $(".selected-item").each(function () {
                if ($(this).text() === selectedOption.text) {
                    $(this).remove();
                }
            });
        });
        $(".locationSelect").on("select2:unselect", function (e) {
            var selectedOption = e.params.data;
            $(".selected-item").each(function () {
                if ($(this).find('.close-icon').length > 0) {
                    var textWithoutCloseIcon = $(this).clone().children().remove().end().text().trim();
                    if (textWithoutCloseIcon === selectedOption.text) {
                        $(this).remove();
                    }
                }
            });
        });
    });
    // *** Account Select1 ****
    $(document).ready(function () {
        // Initialize Select2
        $(".mySelect1").select2({
        placeholder: "account to filter",
        // allowClear: true
        });
       // Function to add a selected item
        function addSelectedItem(selectedOption) {
            var selectedItem = $("<div>").addClass("selected-item");        
            selectedItem.text(selectedOption.text);
            var closeIcon = $("<span>").addClass("close-icon").text("×");
    
            closeIcon.on("click", function () {
                selectedItem.remove();
                $(".mySelect1 option[value='" + selectedOption.id + "']").prop("selected", false);
                $(".mySelect1").trigger("change");
            });
    
            selectedItem.append(closeIcon);
            $(".selectitemJs1").append(selectedItem);
        }
    
        // Handle item selection
        $(".mySelect1").on("select2:select", function (e) {
            var selectedOption = e.params.data;
            addSelectedItem(selectedOption);
        });
    
        // Handle item deselection
        $(".mySelect1").on("select2:unselect", function (e) {
            var selectedOption = e.params.data;
            $(".selected-item").each(function () {
                if ($(this).text() === selectedOption.text) {
                    $(this).remove();
                }
            });
        });
        $(".mySelect1").on("select2:unselect", function (e) {
            var selectedOption = e.params.data;
            $(".selected-item").each(function () {
                if ($(this).find('.close-icon').length > 0) {
                    var textWithoutCloseIcon = $(this).clone().children().remove().end().text().trim();
                    if (textWithoutCloseIcon === selectedOption.text) {
                        $(this).remove();
                    }
                }
            });
        });
    });
    // ***Account Filter ****
    $(document).ready(function () {
    // Initialize Select2
    $(".mySelect2").select2({
    placeholder: "account to filter",
    // allowClear: true
    });
    // Function to add a selected item
    function addSelectedItem(selectedOption) {
        var selectedItem = $("<div>").addClass("selected-item");        
        selectedItem.text(selectedOption.text);
        var closeIcon = $("<span>").addClass("close-icon").text("×");

        closeIcon.on("click", function () {
            selectedItem.remove();
            $(".mySelect2 option[value='" + selectedOption.id + "']").prop("selected", false);
            $(".mySelect2").trigger("change");
        });

        selectedItem.append(closeIcon);
        $(".selectitemJs2").append(selectedItem);
    }

    // Handle item selection
    $(".mySelect2").on("select2:select", function (e) {
        var selectedOption = e.params.data;
        addSelectedItem(selectedOption);
    });

    // Handle item deselection
    $(".mySelect2").on("select2:unselect", function (e) {
        var selectedOption = e.params.data;
        $(".selected-item").each(function () {
            if ($(this).text() === selectedOption.text) {
                $(this).remove();
            }
        });
    });
    $(".mySelect2").on("select2:unselect", function (e) {
        var selectedOption = e.params.data;
        $(".selected-item").each(function () {
            if ($(this).find('.close-icon').length > 0) {
                var textWithoutCloseIcon = $(this).clone().children().remove().end().text().trim();
                if (textWithoutCloseIcon === selectedOption.text) {
                    $(this).remove();
                }
            }
        });
    });
    });
    //  ** Location filter2 *****
    $(document).ready(function () {
        // Initialize Select2
        $(".locationSelect2").select2({
        placeholder: "location to filter ",
        // allowClear: true
        });
        // Function to add a selected item
        function addSelectedItem(selectedOption) {
            var selectedItem = $("<div>").addClass("selected-item");        
            selectedItem.text(selectedOption.text);
            var closeIcon = $("<span>").addClass("close-icon").text("×");

            closeIcon.on("click", function () {
                selectedItem.remove();
                $(".locationSelect2 option[value='" + selectedOption.id + "']").prop("selected", false);
                $(".locationSelect2").trigger("change");
            });

            selectedItem.append(closeIcon);
            $(".locationitemJs2").append(selectedItem);
        }

        // Handle item selection
        $(".locationSelect2").on("select2:select", function (e) {
            var selectedOption = e.params.data;
            addSelectedItem(selectedOption);
        });

        // Handle item deselection
        $(".locationSelect2").on("select2:unselect", function (e) {
            var selectedOption = e.params.data;
            $(".selected-item").each(function () {
                if ($(this).text() === selectedOption.text) {
                    $(this).remove();
                }
            });
        });
        $(".locationSelect2").on("select2:unselect", function (e) {
            var selectedOption = e.params.data;
            $(".selected-item").each(function () {
                if ($(this).find('.close-icon').length > 0) {
                    var textWithoutCloseIcon = $(this).clone().children().remove().end().text().trim();
                    if (textWithoutCloseIcon === selectedOption.text) {
                        $(this).remove();
                    }
                }
            });
        });
    });

// ***************** [ select key  tag ] *****
const ul = document.querySelector(".keygroup"),
input = document.querySelector(".input_keys"),
tagNumb = document.querySelector(".details span");

let maxTags = 10,
tags = ["AK-{d}", "AR-{d}", "AN-{d}", "AUG-{d}", "M16", "handgun", "pistol", "grenade", "airfield", "knife", "machete", "artillery", "Minefield",
"barricade", "explosion", "battlefield", "breach", "booby trap", "bullet", "bulletproof", "capture", "captive", "hostage", "firearm", "biology weaponry", "chemical weaponry", "antiaircraft gun",
"Big bertha", "B52", "german 88", "panzerfaust", "gun", "anthrax", "hydrogen cyanide", "yellow rain", "smallpox", "adamsite", "disphogene", "lewisite", "nervegas", "phosgene",
"tear gas", "cloropirin", "flamesite", "flamethrower", "greek fire", "nuke", "rocket", "cloropirin",];

countTags();
createTag();

function countTags(){
    input.focus();
    tagNumb.innerText = maxTags - tags.length;
}

function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
    });
    countTags();
}

function remove(element, tag){
    let index  = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    countTags();
}

function addTag(e){
    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < 100000){
                tag.split(',').forEach(tag => {
                    tags.push(tag);
                    createTag();
                });
            }
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector(".details button");
removeBtn.addEventListener("click", () =>{
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTags();
});
