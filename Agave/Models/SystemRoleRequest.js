/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function SystemRoleRequest() {
    this.username = undefined
    this.role = undefined

}

//Make instanceof work


/**
 *The username of the api user granted this role.
 *
 * @return: string
 */
SystemRoleRequest.prototype.getUsername = function () {

    return this.username;
}


SystemRoleRequest.prototype.setUsername = function (value) {
    this.username = value;
}


/**
 *The role granted this user.
 *
 * @return: SystemRoleTypeEnum
 */
SystemRoleRequest.prototype.getRole = function () {

    return this.role;
}


SystemRoleRequest.prototype.setRole = function (value) {
    this.role = value;
}
     





