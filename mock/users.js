import mockjs,{Random} from 'mockjs';
export default{
    'GET /api/v1.0.0/users':(req,res) => {
        setTimeout(() => {
            res.send({
                list:[
                    {id:Random.guid(),name:Random.cname(),'age|18-70':18},
                    {id:Random.guid(),name:Random.cname(),'age|18-70':18},
                    {id:Random.guid(),name:Random.cname(),'age|18-70':18},
                    {id:Random.guid(),name:Random.cname(),'age|18-70':18},
                    {id:Random.guid(),name:Random.cname(),'age|18-70':18},
                ]
            })
        }, 3000);
    }
}