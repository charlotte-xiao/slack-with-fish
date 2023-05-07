Page({
    data: {
        title: 'Test',
        bookList: [],
        creatingBookName: '',
        editingBookName: '',
        profile: {}
    },

    onLoad(options) {
        wx.BaaS.auth.loginWithWechat().then(user => {
            this.data.profile = user.toJSON();
        })
    },

    addBook(e) {
        const Books = new wx.BaaS.TableObject('test');
        const Book = Books.create();
        const date = new Date().toString();
        Book.set({date}).save();
    }

})