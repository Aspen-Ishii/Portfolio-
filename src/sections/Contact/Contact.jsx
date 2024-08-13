import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action=""> {/* hook link up to make functional */}
            <div className="formGroup">
                <label htmlFor='name' hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder='Name' required autoComplete='off'/>
            </div>
            <div className="formGroup">
                <label htmlFor='email' hidden>
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder='Email Address' required/>
            </div>
            <div className="formGroup">
                <label htmlFor='subject' hidden>
                    Name
                </label>
                <input type="text" name="subject" id="subject" placeholder='Subject' required/>
            </div>
            <div className="formGroup">
                <label htmlFor='Message' hidden>
                    Message
                </label>
                <textarea name="message" id="message" placeholder='Message' required autoComplete='off'></textarea>
            </div>
            <input className='hover btn' type="submit" value="Submit" />
            </form>
        </section>
  );
}


export default Contact;