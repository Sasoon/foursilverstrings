$(document).ready(function () {
  console.log("ready!");

  const button = document.querySelector("#menu-button"); // Hamburger Icon
  const menu = document.querySelector("#menu"); // Menu

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  function ReplaceSelectWithButtons(selectField) {
    // get the basics
    var selectValue = selectField.val();
    var selectId = selectField.attr("id");

    // get all options and create buttons
    $(selectField)
      .find("option")
      .each(function () {
        if ($(this).val()) {
          var btn = $(
            '<div data-value="' +
              $(this).val() +
              '" data-target="' +
              selectId +
              '" class="selectbtn">' +
              $(this).text() +
              "</div>"
          );
          if ($(this).val() == selectValue) {
            btn.addClass("selected");
          }
          btn.insertBefore(selectField);
        }
      });
    // hide the select field
    selectField.hide();

    // map click event to buttons
    $(document).on("click", ".selectbtn", function () {
      var target = $(this).data("target");
      $('.selectbtn[data-target="' + target + '"]').removeClass("selected");
      $(this).addClass("selected");

      // deselect everything, select the selected :)
      var selectorAll = "#" + target + " option";
      $(selectorAll).removeAttr("selected");
      var selectorSingle =
        "#" + target + ' option[value="' + $(this).data("value") + '"]';
      $(selectorSingle).attr("selected", "selected");
      $(selectorSingle).change();
    });
  }

  // change size select  to button
  ReplaceSelectWithButtons($("#size"));
});
