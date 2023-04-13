import { Star, StarHalf, StarOutline } from "@mui/icons-material";

const Testimonial = ({ testimonial: { picture, name, job, rating, title, comment } }) => {
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;
        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} sx={{ color: "#EFCA07" }} />);
        };
        if (halfStars) {
            stars.push(<StarHalf key={fullStars} sx={{ color: "#EFCA07" }} />);
        };
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarOutline key={fullStars + halfStars + i} sx={{ color: "#EFCA07" }} />);
        };
        return stars;
    };

    return (
        <div className='h-56 md:h-52 lg:h-52'>
            <div className="relative pointer-events-none pt-1 pb-7 px-1.5 flex gap-2 bg-gradient-to-b from-[#460082] to-[#000000] mx-2 rounded">
                <img className="w-14 h-14 rounded-full" draggable="false" src={picture} alt={`${name}, ${job}`} />
                <div className="flex flex-col gap-0.5 w-2/3">
                    <span className="text-xl">{name}</span>
                    <span className="text-xs">{job}</span>
                </div>
                <div className="flex items-start justify-end w-1/3">
                    {renderStars(rating)}
                </div>
                <div className="absolute bg-white mx-1 inset-x-0 -bottom-20 p-1 shadow-md shadow-black">
                    <span className="text-black text-sm">{title}</span>
                    <p className="text-[#5D6473] text-xs">{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;