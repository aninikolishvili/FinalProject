

const Profile_Menu = () => {
    const profile = [
        {
            img: '/images/Cart2.png',
            label: 'Orders'
        },

        {
            img: '/images/Heart.png',
            label: 'Wishlist'
        },

        {
            img: '/images/Delivery.png',
            label: 'Address'
        },

        {
            img: '/images/Key.png',
            label: 'Password'
        },

        {
            img: '/images/User2.png',
            label: 'Account Detail'
        },

        {
            img: '/images/Logout.png',
            label: 'Logout'
        },
    ];
    return (
                    <div className="mt-[120px]" >
                        {
                            profile.map((item, index) => (
                                <div className='flex gap-[10px] text-[14px]  mb-[16px] mr-[36px]' key={index}>
                                    <img src={item.img} />
                                    {item.label}
                                </div>
                            ))
                        }
        </div>
    )
}

export default Profile_Menu;