define([
    "dojo/_base/lang",
    "epi-cms/component/ContentContextMenuCommandProvider",
    "open-in-new-tab/commands/OpenInNewTab"
], function(
    lang,
    ContentContextMenuCommandProvider,
    OpenInNewTab
) {

    var originalMethod = ContentContextMenuCommandProvider.prototype.postscript;

    lang.mixin(ContentContextMenuCommandProvider.prototype, {

        postscript: function() {
            originalMethod.call(this);

            var openInNewTab = new OpenInNewTab(this._settings);

            this.commands.push(openInNewTab);
        }
    });

    ContentContextMenuCommandProvider.prototype.postscript.nom = "postscript";

});
