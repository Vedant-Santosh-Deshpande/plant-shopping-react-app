import React from 'react'

const ContactSection = () => {
  return (
    <div className='p-5'>
    <div className='row'>
    <div className='mb-4'>
            <h1>Contact Us</h1>
        </div>
        <div className='mb-5'>
        <p><i className="fas fa-home me-3"></i> Sainagar, Lane No. 03, Pune, India</p>
            <p>
                <i className="fas fa-envelope me-3"></i>
                fancyhut@gmail.com
            </p>
            <p><i className="fas fa-phone me-3"></i> + 91 9765877307</p>
            <p><i className="fas fa-print me-3"></i> + 91 9765877307</p>
        </div>
        
    </div>
    <div className='row '>
        <iframe src="https://www.google.com/maps/place/Utkarsh+Abhyasika+(Library+%2F+Study+center)/@18.4567783,73.8729558,19.35z/data=!4m9!1m2!2m1!1suppar+depot,+Pune!3m5!1s0x3bc2ebe73b92dea5:0x8d4115d2bf764766!8m2!3d18.4565038!4d73.8734882!16s%2Fg%2F11y785v3dv?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" width="400" height="300" loading="lazy"></iframe>
    </div>
    </div>
  )
}

export default ContactSection
