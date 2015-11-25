/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function MonitoringTaskSummary() {
    this.active = true
    this.frequency = undefined
    this.internalUsername = undefined
    this.target = undefined
    this.updateSystemStatus = false
    this.id = undefined

}

//Make instanceof work


/**
 *Whether this monitor is currently active.
 *
 * @return: bool
 */
MonitoringTaskSummary.prototype.getActive = function () {

    return this.active;
}


MonitoringTaskSummary.prototype.setActive = function (value) {
    this.active = value;
}


/**
 *The interval in minutes on which this monitor will run. Minimum is 5. Default is 720.
 *
 * @return: int
 */
MonitoringTaskSummary.prototype.getFrequency = function () {

    return this.frequency;
}


MonitoringTaskSummary.prototype.setFrequency = function (value) {
    this.frequency = value;
}


/**
 *Internal user account used to perform the check.
 *
 * @return: string|null
 */
MonitoringTaskSummary.prototype.getInternalUsername = function () {

    return this.internalUsername;
}


MonitoringTaskSummary.prototype.setInternalUsername = function (value) {
    this.internalUsername = value;
}


/**
 *The id of the sytem to be monitored. This must be an active system registered with the Systems service.
 *
 * @return: string
 */
MonitoringTaskSummary.prototype.getTarget = function () {

    return this.target;
}


MonitoringTaskSummary.prototype.setTarget = function (value) {
    this.target = value;
}


/**
 *Whether this Monitor should update the system status when the results change. You must have the ADMIN role on the target system to use this feature.
 *
 * @return: bool
 */
MonitoringTaskSummary.prototype.getUpdateSystemStatus = function () {

    return this.updateSystemStatus;
}


MonitoringTaskSummary.prototype.setUpdateSystemStatus = function (value) {
    this.updateSystemStatus = value;
}


/**
 *The unique id of the monitor
 *
 * @return: string
 */
MonitoringTaskSummary.prototype.getId = function () {

    return this.id;
}


MonitoringTaskSummary.prototype.setId = function (value) {
    this.id = value;
}
     





