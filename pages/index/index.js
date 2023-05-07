Page({
    data: {

    },

    onLoad(options) {
        wx.BaaS.auth.loginWithWechat().then(user => {
            this.data.profile = user.toJSON();
        })
    },

})