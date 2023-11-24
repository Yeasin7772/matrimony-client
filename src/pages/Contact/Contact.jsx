import Container from "../../components/Container/Container";

const Contact = () => {


    return (
        <>
            <Container>
                <div className=" mb-5 ">

                    <div className="text-center space-y-5 mt-5 mb-5 ">
                        <h1 className="text-4xl font-semibold">CONTACT DETAILS </h1>


                    </div >
                    <div className="flex flex-col bg-base-200 sm:flex-row items-center justify-between gap-5 mb-10 border-2 p-5 rounded sm:p-8 md:p-10 lg:p-12 xl:p-16">
                        <div className="space-y-2">
                            <p className="text-xl bg-red-500 text-white font-bold
         border-dashed border-2 p-5 rounded">Matrimony@email.com</p>
                            <p className="text-xl bg-red-500 text-white font-bold
         border-dashed border-2 p-5 rounded">+99 55 66 88 526</p>
                            <p className="text-xl bg-red-500 text-white font-bold
         border-dashed border-2 p-5 rounded">Victoria 8007 Australia Envato</p>
                            <p className="text-xl bg-red-500 text-white font-bold
         border-dashed border-2 p-5 rounded">Left Some Word</p>
                        </div>


                        <div >
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="food_name" className="input input-bordered" placeholder="Your Name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="Number" name="food_quantity" placeholder="Phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" name="subject" placeholder="Subject" className="input input-bordered" required />

                                </div>



                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea className="textarea textarea-info h-44" placeholder="Your Message"></textarea>

                            </div>
                            <div className="mt-4">
                                <button className="btn btn-outline btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
