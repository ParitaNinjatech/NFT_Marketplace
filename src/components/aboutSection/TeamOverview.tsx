import {
    Team1, Team2, Team3, Team4, Team5, Team6, Team7, Team8
} from '../../assets';

function TeamOverview() {
    const teamMembers = [
        {
            name: "John Doe",
            role: "Founder & CEO",
            contributions: "Leadership, Vision, Strategy",
            image: Team1,
        },
        {
            name: "Jane Smith",
            role: "Co-Founder & CTO",
            contributions: "Technology, Blockchain Development",
            image: Team2,
        },
        {
            name: "Alice Johnson",
            role: "Lead Designer",
            contributions: "UI/UX Design, Branding",
            image: Team3,
        },
        {
            name: "Bob Williams",
            role: "Marketing Head",
            contributions: "Marketing, Partnerships",
            image: Team4,
        },
        {
            name: "Charlie Brown",
            role: "Community Manager",
            contributions: "Community Building, Engagement",
            image: Team5,
        },
        {
            name: "David Green",
            role: "Product Manager",
            contributions: "Product Development, Feature Strategy",
            image: Team6,
        },
        {
            name: "Eve Davis",
            role: "Blockchain Engineer",
            contributions: "Smart Contracts, Security",
            image: Team7,
        },
        {
            name: "Grace Lee",
            role: "Content Strategist",
            contributions: "Content Creation, Storytelling",
            image: Team8,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div >
                <h1 className='text-3xl font-bold text-gray-800 mb-4'>Meet Our Team</h1>
                <p className=' mb-10 text-gray-600 text-center'>Our platform is powered by a passionate team of blockchain developers, digital artists, product managers, and industry experts. We come from diverse backgrounds, united by our shared mission of bringing NFTs to the forefront of digital culture. </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
                        style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-40 h-40 rounded-full object-cover mx-auto mt-6"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                            <p className="text-sm text-gray-500 text-center">{member.role}</p>
                            <p className="text-sm text-gray-600 text-center mt-2">Contributions: {member.contributions}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamOverview;
