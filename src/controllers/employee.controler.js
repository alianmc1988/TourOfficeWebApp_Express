const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res)=>{
   const employees = await Employee.find();
   
   res.json(employees);
};

employeeCtrl.getSelectedEmployee = async(req,res)=>{
    
    const employee = await Employee.findById(req.params.id);
    
    res.json(employee );
};

employeeCtrl.createEmployee = async (req,res)=>{
   const employee =  new Employee(req.body);
   await employee.save();
   res.json({status:'Employee saved'});
};

employeeCtrl.modifyEmployee = async(req,res)=>{
    const id = req.params.id;
    const employee = {
        ci: req.body.ci,
        name: req.body.name,
        lastName: req.body.lastName,
        workarea: req.body.workarea,
        salary: req.body.salary
    }
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status:'Employee Updated', employee});
};

employeeCtrl.deleteEmployee = async (req,res)=>{
    const id = req.params.id;
    await Employee.findByIdAndRemove(id);
    res.json({status:'Employee Deleted'})
};

module.exports = employeeCtrl;