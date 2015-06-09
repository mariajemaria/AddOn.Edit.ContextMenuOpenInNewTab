define([
    "dojo/_base/declare",
    "dojo/dom-attr",
    // Parent class and mixins
    "epi/shell/command/_Command",
    "epi/shell/command/_SelectionCommandMixin"
], function(
    declare,
    domAttr,
    // Parent class and mixins
    _Command,
    _SelectionCommandMixin
) {

    return declare([_Command, _SelectionCommandMixin], {

        label: "Open in new tab",

        iconClass: "epi-iconLink",

        _execute: function () {
            var publicUrl = this.get("selectionData").publicUrl;
            window.open(publicUrl);
        },

        _onModelChange: function () {
            var canExecute = !!this.get("selectionData") && this.get("selectionData").hasTemplate;
            this.set("canExecute", canExecute);
        }
    });
});
