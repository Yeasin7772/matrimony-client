import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const EditBiodata = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const handelAddBio = (e) => {

        e.preventDefault()

        const form = e.target;
        const biodataId = form.data_id.value;
        const name = form.name.value;
        const profileImage = form.image.value;
        const fathers_name = form.fathers_name.value;
        const mother_name = form.mother_name.value;
        const date_of_birth = form.date_of_birth.value;
        const division = form.division.value;
        const present_division = form.present_division.value;
        const type = form.type.value;
        const race = form.race.value;
        const height = form.height.value;
         const partner_height = form.partner_height.value;
        const weight = form.weight.value;
        const partner_weight = form.partner_weight.value;
        const email = user?.email; 
        const occupation = form.Occupation.value;
        const phoneNumber = form.number.value;
        const age = form.your_age.value;
        const partner_age = form.partner_age.value;

        const addBioData = {
            biodataId,
            email,
            name,
            profileImage,
            fathers_name,
            mother_name,
            date_of_birth,
            division,
            present_division,
            type,
            race,
            height,
             partner_height,
            partner_weight,
            weight,
            occupation,
            age,
            partner_age,
            phoneNumber
        };

        console.table(addBioData);
        // form.reset()
        axiosPublic.post('/biodatas', addBioData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Added to your Bio Data collection`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
            .catch(error => {
                console.error("Error  post request:", error);
            });
    }
    return (
        <div>
            <h2 className="text-2xl text-red-400 text-center">Create Your Bio Data</h2>

            <form onSubmit={handelAddBio} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bio data Id</span>
                        </label>
                        <input type="number" name="data_id" className="input input-bordered" placeholder="Enter Your Name" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" placeholder="Enter Your Name" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Image</span>
                        </label>
                        <input type="text" name="image" placeholder=" PhotoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Fathers name</span>
                        </label>
                        <input type="text" name="fathers_name" placeholder="Fathers name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Mother name</span>
                        </label>
                        <input type="text" name="mother_name" placeholder="Mother name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of birth</span>
                        </label>
                        <input type="date" name="date_of_birth" placeholder="Date of birth" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label htmlFor='Permanent Division' className='block text-gray-600'>
                            Permanent Division
                        </label>
                        <select
                            required
                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                            name='division'
                        >
                            <option disabled value="">division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Barisal">Barisal</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor='Present Division name' className='block text-gray-600'>
                            Present Division name
                        </label>
                        <select
                            required
                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                            name='present_division'
                        >
                            <option disabled value="">division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Barisal">Barisal</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <select
                            required
                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                            name='type'
                        >
                            <option disabled value="Gender"> Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Race</span>
                        </label>
                        <input type="text" name="race" placeholder="Race" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Height</span>
                        </label>
                        <input type="text" name="height" placeholder="Height" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Partner Height </span>
                        </label>
                        <input type="text" name="partner_height" placeholder="Partner Height" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Weight</span>
                        </label>
                        <input type="number" name="weight" placeholder="Weight" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Partner Weight</span>
                        </label>
                        <input type="number" name="partner_weight" placeholder="Partner Weight" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input readOnly type="email" defaultValue={user?.email} name="user_email" placeholder="Enter Your email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Occupation</span>
                        </label>
                        <input type="text" name="Occupation" placeholder="Enter  Your Occupation" className="input input-bordered" required />
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Mobile Number
                            </span>
                        </label>
                        <input name="number" type="text" placeholder="Mobile Number" className="input input-bordered " required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Age
                            </span>
                        </label>
                        <input name="your_age" type="text" placeholder="Your Age" className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Partner Age
                            </span>
                        </label>
                        <input name="partner_age" type="text" placeholder="Partner Age" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn bg-red-500 btn-block" type="submit" value="Add Your Bio Data" />
                </div>
            </form>
        </div>
    );
};

export default EditBiodata;