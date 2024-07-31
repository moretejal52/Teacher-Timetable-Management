const { Student, Timetable } = require('./modal');

const adduser = async (req, res) => {
  const {
    fullName,
    department,
    qualification,
    username,
    password,
    mobileNumber,
  } = req.body;

  try {
    const userdata = new Student({
      fullName,
      department,
      qualification,
      
      username,
      password,
      mobileNumber,
    });

    const data = await userdata.save();
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
};

const getdata = async (req, res) => {
  try {
    const userdata = await Timetable.find();
    res.status(200).send({ userdata });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
};

const FindByUsername = async(req,res)=>{
  try{
      const {teacherUsername} = req.params
      const {day, teacherName,division, year,lectures}= req.body

      const data = await Timetable.findOne({teacherUsername})
      res.status(200).send({data, msg:"user found"})
  }
  catch(err){
      res.status(400).send({err})
  }
  
}
/*
const FindByUsername = async (req, res) => {
  try {
    const { teacherUsername } = req.params;
    console.log('Teacher Username:', teacherUsername);

    const data = await Timetable.findOne({ teacherUsername });
    console.log('Data from MongoDB:', data);

    if (!data) {
      return res.status(404).send({ error: "User not found", msg: "No user found with the provided username" });
    }

    // Check if 'day' property exists before accessing it
    if (data.day === undefined) {
      return res.status(400).send({ error: "Invalid user data", msg: "Missing 'day' property" });
    }

    res.status(200).send({ data, msg: "User data found by username" });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send({ error: "Internal server error", msg: err.message });
  }
};*/









const updateuser = async (req, res) => {
  try {
    const { username } = req.params;
    const {
      fullName,
      department,
      qualification,
       password,
      mobileNumber,
    } = req.body;

    const data = await Timetable.updateMany(
      { username },
      {
        $set: {
          fullName,
      department,
      qualification,
      
      
      password,
      mobileNumber,
        },
      }
    );

    if (data.modifiedCount > 0) {
      res.status(200).send({ msg: "data updated " });
    } else {
      res.status(200).send({ msg: "data not updated " });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "user not found" });
  }
};

const deleteuser = async (req, res) => {
  try {
    const { username } = req.params;
    const data = await Student.deleteOne({ username });

    if (data.deletedCount > 0) {
      res.status(200).send({ msg: "data deleted " });
    } else {
      res.status(200).send({ msg: "data not deleted " });
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

const submitForm = async (req, res, next) => {
  try {
    const timetableData = req.body;
    const timetable = new Timetable(timetableData);
    await timetable.save();
    res.status(201).json({ message: 'Timetable data saved successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { adduser, getdata, updateuser, deleteuser, FindByUsername, submitForm };
