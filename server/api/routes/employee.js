const employee = require('../../model/employee')
const Employee = require('../../model/employee')

module.exports = function (router){

    router.post('/employee' , function(req,res){

        let note = new Employee(req.body)
        note.save(function(err,note){

            if(err)
            {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })


    router.get('/employee' , function(req,res){

        Employee.find({}, (err,employee)=>{
            if(err)
            {
                res.json({success:false , message : err});
            }
            else
            {
                if(!employee)
                {
                    res.json({success:false , message : 'No Employee found'});
                }
                else
                {
                    res.json(employee);
                }
            }
        })
    })

    router.get('/employee/:_id', async(req,res)=>{
        try{
            const post = await Employee.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })

    router.put('/updateEmployee/:_id',(req,res)=> {
        if(!req.body._id)
        {
            res.json({success:false , message : 'No employee found'});
        }
        else
        {
            Employee.findOne({_id:req.body._id}, (err,employee)=>{
                if(err)
                {
                    res.json({success:false , message : 'Not a valid Employee id'});
                }
                else
                {
                    employee.emp_img=req.body.emp_img;
                    employee.empID = req.body.empID;
                    employee.empFN= req.body.empFN;
                    employee.empLN= req.body.empLN;
                    employee.DOB = req.body.DOB;
                    employee.Dad_name= req.body.Dad_name;
                    employee.Mom_name= req.body.Mom_name;
                    employee.Address= req.body.Address;
                    employee.State= req.body.State;
                    employee.Country= req.body.Country;
                    employee.Zip_Pin= req.body.Zip_Pin;
                    employee.Number= req.body.Number;
                    employee.Location= req.body.Location;
                    employee.Domain= req.body.Domain;
                    employee.Salary= req.body.Salary;                    
                    employee.save((err)=>{
                        if(err)
                        {
                            res.json({success:false , message : err});
                        }
                        else
                        {
                            res.json({success:true , message : 'Employee details Updated !!'});
                        }
                    })
                }
            })
        }
    })

    router.delete('/deleteEmployee/:id',(req,res)=> {
        if(!req.params.id)
        {
            res.json({success:false , message : 'No id provided'});
        }
        else
        {
            Employee.findOne({_id: req.params.id}, (err,employee)=>{
                if(err)
                {
                    res.json(employee);
                }
                else
                {
                    
                    employee.remove((err)=>{
                        if(err)
                        {
                            res.json({success:false , message : err});
                        }
                        else
                        {
                            res.json({success:true , message : 'Employee Record Deleted !!'});
                        }
                    })
                }
            })
        }
    })


}