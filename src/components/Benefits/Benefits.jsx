import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Container from "../Container/Container";

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}
const Benefits = () => {
    return (
        <div className="bg-blue-300 py-8 ">
            <Container>
                <div className="text-center space-y-6 mb-5">
                    <h1 className="text-4xl">Benefits of <span  className="text-yellow-500">Premium Membership</span></h1>
                    <p className="text-sm">Upgrade to Paid Membership and Speed-up your Partner Search by directly connecting (via chat/call) <br /> with suitable profile. Avail NOW to Enjoy many Premium Benefits.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  ">

                    <div className="text-black flex flex-1 ">
                        <Card color="white" variant="gradient" className="w-full flex-grow p-8">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                            >
                                {/* <Typography
                                    variant="small"
                                    color="black"
                                    className="font-normal uppercase"
                                >
                                    Free Member
                                </Typography> */}
                                <Typography
                                    variant="h1"
                                    color="black"
                                    className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                                    {/* <span className="mt-2 text-4xl">$</span>29{" "} */}
                                    <span className="self-end text-4xl">Free Member</span>
                                </Typography>
                            </CardHeader>
                            <CardBody className="p-0">
                                <ul className="flex flex-col gap-4">
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">Send Express Interests</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">Send Photo Requests</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border text-red-500 border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">Search Suitable Profiles</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">1 year free updates</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                            Life time technical support
                                        </Typography>
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter className="mt-12 p-0">
                                <Button
                                    size="lg"
                                    color="light-blue"
                                    className="hover:scale-[1.02] rounded-lg focus:scale-[1.02] active:scale-100"
                                    ripple={false}
                                    fullWidth={true}
                                >
                                  register free
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="flex flex-1 ">
                        <Card color="white" variant="gradient" className="w-full flex-grow  p-8">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                            >
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal uppercase"
                                >
                                    standard
                                </Typography>
                                <Typography
                                    variant="h1"
                                    color="red"
                                    className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                                    {/* <span className="mt-2 text-4xl">$</span>29{" "} */}
                                    <span className="self-end text-4xl ">Paid Member</span>
                                </Typography>
                               
                            </CardHeader>
                            <CardBody className="p-0">
                                <ul className="flex flex-col gap-4">
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">Send Express Interests</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">Send Photo Requests</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">Search Suitable Profiles</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">View Contact Detail of the Profile</Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                        Bold Listing of your profile
                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">
                                        Send Unlimited Personalized Messages
                                        </Typography>
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter className="mt-12 p-0">
                                <Button
                                    size="lg"
                                    color="red"
                                    className="hover:scale-[1.02] focus:scale-[1.02] rounded-lg active:scale-100"
                                    ripple={false}
                                    fullWidth={true}
                                >
                                   View MemberShip 
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Benefits;