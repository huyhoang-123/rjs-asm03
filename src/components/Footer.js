import 'bootstrap/dist/css/bootstrap.css';
function FooterOne() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className='container'>
                <div className='row' style={{ color: 'white' }}>
                    <div className='col-4 ' style={{ padding: '50px 0 40px' }}><h6 style={{ paddingBottom: '20px' }}>CUSTOMER SERVICES</h6>
                        <p style={{ fontWeight: '300' }}>Helps & Contact Us</p>
                        <p style={{ fontWeight: '300' }}>Returns & Refunds</p>
                        <p style={{ fontWeight: '300' }}>Online Stores</p>
                        <p style={{ fontWeight: '300' }}>Terms & Conditions</p>
                    </div>
                    <div className='col-4' style={{ padding: '50px 0 40px' }}><h6 style={{ paddingBottom: '20px' }}>COMPANY</h6>
                        <p style={{ fontWeight: '300' }}>What we do</p>
                        <p style={{ fontWeight: '300' }}>Availible Services</p>
                        <p style={{ fontWeight: '300' }}>Latest Posts</p>
                        <p style={{ fontWeight: '300' }}>FAQs</p></div>
                    <div className='col-4' style={{ padding: '50px 0 40px' }}><h6 style={{ paddingBottom: '20px' }}>SOCIAL MEDIA</h6>
                        <p style={{ fontWeight: '300' }}>Twitter</p>
                        <p style={{ fontWeight: '300' }}>Instagram</p>
                        <p style={{ fontWeight: '300' }}>Facebook</p>
                        <p style={{ fontWeight: '300' }}>Pinterest</p></div>
                </div>
            </div>
        </div>
    )

}

export default FooterOne;