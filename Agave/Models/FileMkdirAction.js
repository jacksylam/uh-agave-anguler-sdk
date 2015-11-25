/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function FileMkdirAction() {
    this.action = FileManagementActionTypeEnum.MKDIR;
}

//Make instanceof work
FileMkdirAction.prototype = new FileAction();

FileMkdirAction.prototype.constructor = FileMkdirAction;


/**
 * Absolute or relative path of the new directory
 *
 * @return: string
 */
FileMkdirAction.prototype.getPath = function () {

    return this.path;
}


FileMkdirAction.prototype.setPath = function (value) {
    this.path = value;
}
     





