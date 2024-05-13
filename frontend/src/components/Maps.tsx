import React from 'react'

export default function Maps() {
  return (
    <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8291148979743!2d80.02273867616125!3d23.176436210567243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a94397365dd3%3A0x5f9aeb812c2678c9!2sIIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1715622457985!5m2!1sen!2sin"
      className='w-[100vw] h-[50vh]'
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="IIITDM Jabalpur Google Map"
    ></iframe>
    </div>
  )
}
