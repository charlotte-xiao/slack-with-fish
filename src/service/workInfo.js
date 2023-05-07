const tableName = 'work_info';

const getWorkInfoByUid = (uid, cb) => {
    const workInfoRepository = new wx.BaaS.TableObject(tableName),
        query = new wx.BaaS.Query()
    query.compare('created_by', '=', uid)
    workInfoRepository.setQuery(query).find()
        .then(res => cb(res))
        .catch(err => console.dir(err))
}

const addWorkInfo = (payload, cb) => {

    const workInfoRepository = new wx.BaaS.TableObject(tableName),
        workInfo = workInfoRepository.create();

    workInfo.set(payload)
        .save()
        .then(res => cb(res))
        .catch(err => console.dir(err));

}

let updateWorkInfo = (uid, payload, cb) => {
    return getWorkInfoByUid(uid, (res) => {
        let workInfoRepository = new wx.BaaS.TableObject(tableName);
        workInfo = workInfoRepository.getWithoutData(res.recordId)
        workInfo.set(payload)
            .update()
            .then(res => cb(res))
            .catch(err => console.dir(err))
    })
}


module.exports = {
    getWorkInfoByUid,
    addWorkInfo,
    updateWorkInfo,
}