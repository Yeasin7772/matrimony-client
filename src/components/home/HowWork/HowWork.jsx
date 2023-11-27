import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FaHospitalUser, FaUserFriends, FaRegCommentDots } from "react-icons/fa";
import Container from "../../Container/Container";
const HowWork = () => {
    return (
        <div>

            <Container>
                <div className="text-center mb-5">
                    <h1 className="text-4xl font-semibold">How It Works</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <Card className="mt-6 w-full shadow-2xl">
                        <CardBody>
                            <FaHospitalUser className="text-5xl text-red-400" />
                            <Typography variant="h2" color="red" className="mb-2">
                                01
                            </Typography>
                            <Typography variant="h5" color="red" className="mb-2">
                                Sign up
                            </Typography>
                            <Typography>
                                Register for free & put up your Profile
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button className="bg-red-300">Read More</Button>
                        </CardFooter>
                    </Card>
                    <Card className="mt-6 w-full shadow-xl">
                        <CardBody>
                            <FaUserFriends className="text-5xl text-green-400" />
                            <Typography variant="h2" color="green" className="mb-2">
                                02
                            </Typography>
                            <Typography variant="h5" color="green" className="mb-2">
                                Connect With Us
                            </Typography>
                            <Typography>
                                Select & Connect with Matches you like
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button className="bg-green-300">Read More</Button>
                        </CardFooter>
                    </Card>
                    <Card className="mt-6 w-full shadow-2xl ">
                        <CardBody>
                            <FaRegCommentDots className="text-5xl text-blue-400" />
                            <Typography variant="h2" color="blue" className="mb-2">
                                03
                            </Typography>
                            <Typography variant="h5" color="blue" className="mb-2">
                                Interact
                            </Typography>
                            <Typography>
                                Start a Conversation with your Match.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button className="bg-blue-300">Read More</Button>
                        </CardFooter>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default HowWork;