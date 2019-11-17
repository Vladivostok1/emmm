import Mock from 'mockjs'

Mock.mock('https://2333.com/Student', {
    'list|1-10': [{
        'id|+1':1,
        'age':'@integer(20,50)',
        'name':'@cname',
        'address':'@province'
    }]
})