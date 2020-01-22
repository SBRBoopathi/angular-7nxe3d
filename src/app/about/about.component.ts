import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.scss' ]
})
export class AboutComponent  {
  project_json:string;
  project_json_array:string[];

 ngOnInit(){
   this.project_json = `[
                    {
                    "Project": "Lenovo – Optimization AEM Campaigns",
                    "desc": "Lenovo Group Limited, often shortened to Lenovo, is a Chinese multinational technology company with headquarters in Beijing. It designs, develops, manufactures, and sells personal computers, tablet computers, smartphones, workstations, servers, electronic storage devices, IT management software, and smart televisions",
                    "Project_Duration":"More than 1 Year",
                    "Technology_Used": "CSS, HTML, Advanced JavaScript and JQuery with Adobe Target tool.",
                    "Tools_Used": "Adobe Target tools for creating A/B Testing, Experience Testing, Adobe Analytics Tool - helps in tracking our developed code page and providing accurate analysis for data (like Google analytics) and Evergage CDP(Optimization) - that allows users to collect, analyze, and respond to user behavior on their websites and web applications in real-time."
                  },
                    {
                    "Project": "Tranzport",
                    "desc": "Tranzport is kind of online freight quoting, booking, and management software.Tranzport operates two divisions: Tranzport Cloud and Tranzport Concierge. Tranzport Cloud is a cloud-based freight reservation and management software. Tranzport Concierge is a human based full-service freight broker and logistics service provider that allows shippers the ability to have a personalized broker experience. The two divisions operate independently.",
                    "Project_Duration":"6 Months",
                    "Technology_Used": "SASS, HTML, Bootstrap, JavaScript and Angular 6 – npm, Node.js.",
                    "Tools_Used": "Adobe Photoshop used for designing PSD files/Mockups"
                  },
                    {
                    "Project": "Genworth Financial, Inc.",
                    "desc": "Genworth Financial, Inc. (NYSE: GNW) is a Fortune 500 insurance holding company dedicated to helping people secure their financial lives, families, and futures. Genworth has leadership positions in offerings that assist consumers in protecting themselves, investing for the future, and planning for retirement. In addition, the company is a global leader in managing mortgage default risk. Genworth’s Global Mortgage Insurance Division works with lender partners, regulators, and policy leaders to help more people responsibly achieve and maintain the dream of homeownership. In doing so, it promotes stronger and more sustainable communities around the world. By combining its global experience in mortgage guarantees with technology and service leadership, Genworth delivers innovation to the housing marketplace.",
                    "Project_Duration":"More than 1 Year",
                    "Technology_Used": "CSS, HTML, Bootstrap, JavaScript and Angular 2 – npm, Node.js.",
                    "Tools_Used": "Adobe Photoshop used for designing PSD files/Mockups."
                  }
                    
                  ]`;
    //convert the JSON string into JSON object
    this.project_json_array = JSON.parse(this.project_json);
 }
  
}
