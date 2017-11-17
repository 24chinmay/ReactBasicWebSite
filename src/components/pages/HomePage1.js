import React, { Component } from 'react';


class HomePage1 extends Component {
  render() {
    return (
   	 <div class="float-xl-left">
  <div id="accordion" role="tablist">
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        JAVA HISTORY---- 10/6/2017 
        </a>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <h4><p>James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project in June 1991.[24] Java was originally designed for interactive television, but it was too advanced for the digital cable television industry at the time. The language was initially called Oak after an oak tree that stood outside Gosling's office. Later the project went by the name Green and was finally renamed Java, from Java coffee. Gosling designed Java with a C/C++-style syntax that system and application programmers would find familiar.</p>
<p>Sun Microsystems released the first public implementation as Java 1.0 in 1995. It promised "Write Once, Run Anywhere" (WORA), providing no-cost run-times on popular platforms. Fairly secure and featuring configurable security, it allowed network- and file-access restrictions. Major web browsers soon incorporated the ability to run Java applets within web pages, and Java quickly became popular. The Java 1.0 compiler was re-written in Java by Arthur van Hoff to comply strictly with the Java 1.0 language specification. With the advent of Java 2 (released initially as J2SE 1.2 in December 1998 – 1999), new versions had multiple configurations built for different types of platforms. J2EE included technologies and APIs for enterprise applications typically run in server environments, while J2ME featured APIs optimized for mobile applications. The desktop version was renamed J2SE. In 2006, for marketing purposes, Sun renamed new J2 versions as Java EE, Java ME, and Java SE, respectively.</p>
<p>In 1997, Sun Microsystems approached the ISO/IEC JTC 1 standards body and later the Ecma International to formalize Java, but it soon withdrew from the process.Java remains a de facto standard, controlled through the Java Community Process. At one time, Sun made most of its Java implementations available without charge, despite their proprietary software status. Sun generated revenue from Java through the selling of licenses for specialized products such as the Java Enterprise System.</p>
<p>On November 13, 2006, Sun released much of its Java virtual machine (JVM) as free and open-source software, (FOSS), under the terms of the GNU General Public License (GPL). On May 8, 2007, Sun finished the process, making all of its JVM's core code available under free software/open-source distribution terms, aside from a small portion of code to which Sun did not hold the copyright.
Sun's vice-president Rich Green said that Sun's ideal role with regard to Java was as an "evangelist".[35] Following Oracle Corporation's acquisition of Sun Microsystems in 2009–10, Oracle has described itself as the "steward of Java technology with a relentless commitment to fostering a community of participation and transparency".[36] This did not prevent Oracle from filing a lawsuit against Google shortly after that for using Java inside the Android SDK (see Google section below). Java software runs on everything from laptops to data centers, game consoles to scientific supercomputers.On April 2, 2010, James Gosling resigned from Oracle.</p>
In January 2016, Oracle announced that Java runtime environments based on JDK 9 will discontinue the browser plugin.</h4>
   </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          JAVA ADVANTAGES---- 10/3/2017
        </a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        <h4><p>Java offers higher cross- functionality and portability as programs written in one platform can run across desktops, mobiles, embedded systems.</p>
<p>Java is free, simple, object-oriented, distributed, supports multithreading and offers multimedia and network support.</p>
<p>Java is a mature language, therefore more stable and predictable. The Java Class Library enables cross-platform development.</p>
<p>Being highly popular at enterprise, embedded and network level, Java has a large active user community and support available.</p>
<p>Unlike C and C++, Java programs are compiled independent of platform in bytecode language which allows the same program to run on any machine that has a JVM installed.</p>
<p>Java has powerful development tools like Eclipse SDK and NetBeans which have debugging capability and offer integrated development environment.</p>
<p>Increasing language diversity, evidenced by compatibility of Java with Scala, Groovy, JRuby, and Clojure.</p>
<p>Relatively seamless forward compatibility from one version to the next</p>
<p>In conclusion, almost 20 years after its inception, Java continues to deliver considerable value to the world of software development. Java 8, in fact, offers new features such as a scalable and flexible platform for the Internet of Things, less boilerplate code, new date and time library and API, refreshed graphics toolkit, integration with JavaScript, and others. This upgrade is in line with modern enterprise requirements and will sustain the relevance of this popular programming language, which is often deemed as the ‘lingua franca’ (common language) by many developers in the industry.</p></h4>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingThree">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          WHY JAVA---- 8/3/2016
        </a>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Java is the 3rd Most Demanded Skill on Angel list. Many tech giants such as Google or Amazon also use Java to develop the backend of their websites, and because Java has pretty good performance, a lot of startups who reach the scaling point would integrate their apps with Java to power features that need to have good performance.
      </div>
    </div>
  </div>
</div>

</div>

    );
  }
}

export default HomePage1;
