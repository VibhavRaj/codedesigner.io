import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-javscript",
  templateUrl: "./javscript.component.html",
  styleUrls: ["./javscript.component.css"]
})
export class JavscriptComponent implements OnInit {
  panels = [
    {
      active: true,
      name: "This is panel header 1",
      childPanel: [
        {
          active: false,
          name: "This is panel header 1-1"
        }
      ]
    },
    {
      active: false,
      name: "This is panel header 2"
    },
    {
      active: false,
      name: "This is panel header 3"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
