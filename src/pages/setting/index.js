import {getWorkInfoByUid} from "../../service/workInfo";

const GLOBAL_DATA = getApp().GLOBAL_DATA;
Page({

    /**
     * Page initial data
     */
    data: {
        profile: {},
        workInfo: {
            workStartTime: "00:00",
            workEndTime: "00:00",
            salaryPerMonth: "1000",
            workDays: 21,
            payday: 10,
        }
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        getWorkInfoByUid(GLOBAL_DATA.UID, (res) => {
            if (res.data.objects.length > 0) {
                this.setData({'workInfo': res.data.objects[0]})
            }
        });
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow() {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage() {

    },
    changeWorkStartTime(e) {
        this.setData({'workInfo.workStartTime': e.detail.value});
    },
    changeWorkEndTime(e) {
        this.setData({'workInfo.workEndTime': e.detail.value});
    },
})