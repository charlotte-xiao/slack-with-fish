import {getWorkInfoByUid} from "../../service/workInfo";

const GLOBAL_DATA = getApp().GLOBAL_DATA;

Page({
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

    onLoad() {
        getWorkInfoByUid(GLOBAL_DATA.UID, (res) => {
            if (res.data.objects.length > 0) {
                this.setData({'workInfo': res.data.objects[0]})
            }
        });
    },

})