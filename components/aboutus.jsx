import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="aboutus" id="aboutus">
      <Image src="/hero.svg" width="550" height="550" alt="Department Photo" />
      <div>
        <h2>DCSA, Panjab University</h2>
        <p>
          The Computer Culture at the Panjab University dates back to 1966. An
          independent Centre for Computer Science and Applications (now a full
          fledged department) was set-up in 1983. The department aims at
          ingraining the spirit of ingenuity, innovativeness and technical
          competence in the students through rigorous competition and regular
          guidance. The department also caters to the need of users in the
          region and organizes programmes for teaching and research communities.
          <br />
          <br />
          The Master of Computer Applications (MCA) (3 years full time course)
          was initiated in 1992-1993. Master of Computer Applications (3 year
          full time course) in Self Finance mode started in 2008 and Masters of
          Science (Honors School) under the framework of Computer Science was
          introduced in year 2004. Currently the department is running Master of
          Computer Applications (MCA) (2 years full time course). Master of
          Computer Applications (MCA) (2 years full time course) in Self
          Financed mode and Master of Science (Computer Science) under the
          framework of the Hon{"'"}s School (02 years full time course).
          Admissions to these course are held through an annual entrance test
          conducted on All India basis by Panjab University. In addition, Ph.D.
          Program has been started from year 2005.
          <br />
          <br />
          The students at the Department have the unique opportunity of working
          in various advanced development environments. The department has its
          own well-equipped library with over more than 10,000 books and
          resources for exclusive use of the students and the faculty. The
          library has separate magazine and journal sections. Various computer
          journals are available online through the University Library.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
