//setting for map
$(".containerMapa").mapael({
  //conffig the map
  map: {
    name: "world_countries",
    zoom: {
      enabled: true,
      maxLevel: 10,
      animDuration: 250,
    },
    //Setting for part the map
    defaultArea: {
      attrs: {
        stroke: "#3e9dd5", //border the map
        fill: "#1a527b", //background color the map  #1a527b 3e9dd5
        "stroke-width": 1 //maps size border
      },
      //background color mouse hover map
      attrsHover: {
        fill: "#5cb4e7"
      },
      //Events for map parts
      eventHandlers: {
        click: (e, id, mapElem, textElem, elemOptions) => {
          console.log('e: ', e)
          console.log('id: ', id)
          console.log('mapElem:', mapElem)
          console.log('textElem:', textElem)
          console.log('elemOptions: ', elemOptions)
            //alert(elemOptions.attrs.fill)
            //alert(elemOptions.name)
          elemOptions.name == "Colombia" ? location.href = "organizacion.html" : ""
        }
      }
    },
    //Setting points on the map
    defaultPlot: {
      size: 8.5,
      attrs: {
        fill: "#f99200" //"#8bc34a" // "#e2e5e8"
      },
      attrsHover: {
        transform: "s1.5",
        "stroke-width": 1.8,
        fill: "#8bc34a" //"#0e577a" //#5cb4e7",
      }
    }
  },
  //tooltip on maps
  areas: {
    "AF": {
      //text:{content:"holaaaaaa"},
      "value": "35320445",
      "href": "#",
      "attrs": {
        fill: "#3e9dd5"
      },
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>"
      }
    },
    "ZA": {
      "name": "Sudáfrica",
      "value": "50586757",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Sudáfrica<\/span><br \/>"
      }
    },
    "AL": {
      "value": "3215988",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Albania<\/span><br \/>"
      }
    },
    "DZ": {
      "value": "35980193",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Algeria<\/span><br \/>"
      }
    },
    "DE": {
      "value": "81726000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>"
      }
    },
    "AD": {
      "value": "86165",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Andorra<\/span><br \/>"
      }
    },
    "AO": {
      "value": "19618432",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Angola<\/span><br \/>"
      }
    },
    "AG": {
      "value": "89612",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span><br \/>"
      }
    },
    "SA": {
      "value": "28082541",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br \/>"
      }
    },
    "AR": {
      "name": "Argentina",
      "value": "40764561",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Argentina<\/span><br \/>"
      },
      attrs: {
        fill: "#e2e5e8" //"#aedcf4"
      }
    },
    "AM": {
      "value": "3100236",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Armenia<\/span><br \/>"
      }
    },
    "AU": {
      "name": "Australia",
      "value": "22620600",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>"
      }
    },
    "AT": {
      "value": "8419000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Austria<\/span><br \/>"
      }
    },
    "AZ": {
      "value": "9168000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br \/>"
      }
    },
    "BS": {
      "value": "347176",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br \/>"
      }
    },
    "BH": {
      "value": "1323535",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br \/>"
      }
    },
    "BD": {
      "value": "150493658",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br \/>"
      }
    },
    "BB": {
      "value": "273925",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Barbados<\/span><br \/>"
      }
    },
    "BE": {
      "value": "11008000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>"
      }
    },
    "BZ": {
      "value": "356600",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Belize<\/span><br \/>"
      }
    },
    "BJ": {
      "value": "9099922",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Benin<\/span><br \/>"
      }
    },
    "BT": {
      "value": "738267",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br \/>"
      }
    },
    "BY": {
      "value": "9473000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Belarus<\/span><br \/>"
      }
    },
    "MM": {
      "value": "48336763",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Myanmar<\/span><br \/>"
      }
    },
    "BO": {
      "name": "Bolivia",
      "value": "10088108",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Bolivia<\/span><br \/>"
      }
    },
    "BA": {
      "value": "3752228",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span><br \/>"
      }
    },
    "BW": {
      "value": "2030738",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Botswana<\/span><br \/>"
      }
    },
    "BR": {
      "name": "Brasil",
      "value": "196655014",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Brasil<\/span><br \/>"
      }
    },
    "BN": {
      "value": "405938",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span><br \/>"
      }
    },
    "BG": {
      "value": "7476000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br \/>"
      }
    },
    "BF": {
      "value": "16967845",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br \/>"
      }
    },
    "BI": {
      "value": "8575172",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Burundi<\/span><br \/>"
      }
    },
    "KH": {
      "value": "14305183",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br \/>"
      }
    },
    "CM": {
      "value": "20030362",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br \/>"
      }
    },
    "CA": {
      "name": "Canadá",
      "value": "34482779",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Canada<\/span><br \/>"
      }
    },
    "CV": {
      "value": "500585",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Cape Verde<\/span><br \/>"
      }
    },
    "CF": {
      "value": "4486837",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br \/>"
      }
    },
    "CL": {
      "name": "Chile",
      "value": "17269525",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Chile<\/span><br \/>"
      }
    },
    "CN": {
      "name": "China",
      "value": "1344130000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">China<\/span><br \/>"
      }
    },
    "CY": {
      "value": "1116564",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Cyprus<\/span><br \/"
      }
    },
    "CO": {
      "name": "Colombia",
      "value": "46927125",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Colombia<\/span><br \/>"
      },
      attrs: {
        fill: "#e2e5e8" //"#aedcf4"
      }
    },
    "KM": {
      "value": "753943",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Comoros<\/span><br \/>"
      }
    },
    "CG": {
      "value": "4139748",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Congo<\/span><br \/>"
      }
    },
    "CD": {
      "value": "67757577",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span><br \/>"
      }
    },
    "KP": {
      "value": "24451285",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span><br \/>"
      }
    },
    "KR": {
      "value": "49779000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span><br \/>"
      }
    },
    "CR": {
      "name": "Costa Rica",
      "value": "4726575",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br \/>"
      }
    },
    "CI": {
      "value": "20152894",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span><br \/>"
      }
    },
    "HR": {
      "value": "4407000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Croatia<\/span><br \/>"
      }
    },
    "CU": {
      "value": "11253665",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Cuba<\/span><br \/>"
      }
    },
    "DK": {
      "value": "5574000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Denmark<\/span><br \/>"
      }
    },
    "DJ": {
      "value": "905564",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Djibouti<\/span><br \/>"
      }
    },
    "DM": {
      "value": "67675",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Dominica<\/span><br \/>"
      }
    },
    "EG": {
      "value": "82536770",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Egypt<\/span><br \/>"
      }
    },
    "AE": {
      "value": "7890924",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span><br \/>"
      }
    },
    "EC": {
      "name": "Ecuador",
      "value": "14666055",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br \/>"
      }
    },
    "ER": {
      "value": "5415280",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br \/>"
      }
    },
    "ES": {
      "name": "España",
      "value": "46235000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">España<\/span><br \/>"
      }
    },
    "EE": {
      "value": "1340000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Estonia<\/span><br \/>"
      }
    },
    "US": {
      "name": "Estados Unidos",
      "value": "311591917",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Estados Unidos<\/span><br \/>"
      }
    },
    "ET": {
      "value": "84734262",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Ethiopia<\/span><br \/>"
      }
    },
    "FJ": {
      "value": "868406",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Fiji<\/span><br \/>"
      }
    },
    "FI": {
      "value": "5387000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Finland<\/span><br \/>"
      }
    },
    "FR": {
      "value": "65436552",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">France<\/span><br \/>"
      }
    },
    "GA": {
      "value": "1534262",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Gabon<\/span><br \/>"
      }
    },
    "GM": {
      "value": "1776103",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Gambia<\/span><br \/>"
      }
    },
    "GE": {
      "value": "4486000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Georgia<\/span><br \/>"
      }
    },
    "GH": {
      "value": "24965816",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Ghana<\/span><br \/>"
      }
    },
    "GR": {
      "value": "11304000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Greece<\/span><br \/>"
      }
    },
    "GD": {
      "value": "104890",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Grenada<\/span><br \/>"
      }
    },
    "GT": {
      "name": "Guatemala",
      "value": "14757316",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br \/>"
      }
    },
    "GN": {
      "value": "10221808",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Guinea<\/span><br \/>"
      }
    },
    "GQ": {
      "value": "720213",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span><br \/>"
      }
    },
    "GW": {
      "value": "1547061",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span><br \/>"
      }
    },
    "GY": {
      "value": "756040",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Guyana<\/span><br \/>"
      }
    },
    "HT": {
      "value": "10123787",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Haiti<\/span><br \/>"
      }
    },
    "HN": {
      "value": "7754687",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Honduras<\/span><br \/>"
      }
    },
    "HU": {
      "value": "9971000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Hungary<\/span><br \/>"
      }
    },
    "JM": {
      "value": "2709300",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br \/>"
      }
    },
    "JP": {
      "value": "127817277",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Japan<\/span><br \/>"
      }
    },
    "MH": {
      "value": "54816",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span><br \/>"
      }
    },
    "PW": {
      "value": "20609",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Palau<\/span><br \/>"
      }
    },
    "SB": {
      "value": "552267",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span><br \/>"
      }
    },
    "IN": {
      "value": "1241491960",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">India<\/span><br \/>"
      }
    },
    "ID": {
      "value": "242325638",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br \/>"
      }
    },
    "JO": {
      "value": "6181000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Jordan<\/span><br \/>"
      }
    },
    "IR": {
      "value": "74798599",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span><br \/>"
      }
    },
    "IQ": {
      "value": "32961959",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Iraq<\/span><br \/>"
      }
    },
    "IE": {
      "value": "4487000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Ireland<\/span><br \/>"
      }
    },
    "IS": {
      "value": "319000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Iceland<\/span><br \/>"
      }
    },
    "IL": {
      "name": "Israel",
      "value": "7765700",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Israel<\/span><br \/>"
      }
    },
    "IT": {
      "value": "60770000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Italy<\/span><br \/>"
      }
    },
    "KZ": {
      "value": "16558459",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span><br \/>"
      }
    },
    "KE": {
      "value": "41609728",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Kenya<\/span><br \/>"
      }
    },
    "KG": {
      "value": "5507000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span><br \/>"
      }
    },
    "KI": {
      "value": "101093",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br \/>"
      }
    },
    "KW": {
      "value": "2818042",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br \/>"
      }
    },
    "LA": {
      "value": "6288037",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span><br \/>"
      }
    },
    "LS": {
      "value": "2193843",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Lesotho<\/span><br \/>"
      }
    },
    "LV": {
      "value": "2220000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Latvia<\/span><br \/>"
      }
    },
    "LB": {
      "value": "4259405",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Lebanon<\/span><br \/>"
      }
    },
    "LR": {
      "value": "4128572",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Liberia<\/span><br \/>"
      }
    },
    "LY": {
      "value": "6422772",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Libya<\/span><br \/>"
      }
    },
    "LI": {
      "value": "36304",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br \/>"
      }
    },
    "LT": {
      "value": "3203000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Lithuania<\/span><br \/>"
      }
    },
    "LU": {
      "value": "517000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Luxembourg<\/span><br \/>"
      }
    },
    "MK": {
      "value": "2063893",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span><br \/>"
      }
    },
    "MG": {
      "value": "21315135",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br \/>"
      }
    },
    "MY": {
      "value": "28859154",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Malaysia<\/span><br \/"
      }
    },
    "MW": {
      "value": "15380888",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Malawi<\/span><br \/>"
      }
    },
    "MV": {
      "value": "320081",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Maldives<\/span><br \/>"
      }
    },
    "ML": {
      "value": "15839538",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Mali<\/span><br \/>"
      }
    },
    "MT": {
      "value": "419000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Malta<\/span><br \/>"
      }
    },
    "MA": {
      "value": "32272974",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Morocco<\/span><br \/>"
      }
    },
    "MU": {
      "value": "1286051",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Mauritius<\/span><br \/>"
      }
    },
    "MR": {
      "value": "3541540",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br \/>"
      }
    },
    "MX": {
      "name": "México",
      "value": "114793341",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">México<\/span><br \/>"
      }
    },
    "FM": {
      "value": "111542",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span><br \/>"
      }
    },
    "MD": {
      "value": "3559000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span><br \/>"
      }
    },
    "MC": {
      "value": "35427",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Monaco<\/span><br \/>"
      }
    },
    "MN": {
      "name": "Mongolia",
      "value": "2800114",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br \/>"
      }
    },
    "ME": {
      "value": "632261",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Montenegro<\/span><br \/>"
      }
    },
    "MZ": {
      "value": "23929708",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br \/>"
      }
    },
    "NA": {
      "value": "2324004",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Namibia<\/span><br \/>"
      }
    },
    "NP": {
      "value": "30485798",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Nepal<\/span><br \/>"
      }
    },
    "NI": {
      "value": "5869859",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br \/>"
      }
    },
    "NE": {
      "value": "16068994",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Niger<\/span><br \/>"
      }
    },
    "NG": {
      "value": "162470737",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br \/>"
      }
    },
    "NO": {
      "value": "4952000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Norway<\/span><br \/>"
      }
    },
    "NZ": {
      "name": "Nueva Zelanda",
      "value": "4405200",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Nueva Zelanda<\/span><br \/>"
      }
    },
    "OM": {
      "value": "2846145",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Oman<\/span><br \/>"
      }
    },
    "UG": {
      "value": "34509205",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Uganda<\/span><br \/>"
      }
    },
    "UZ": {
      "value": "29341200",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br \/>"
      }
    },
    "PK": {
      "value": "176745364",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br \/>"
      }
    },
    "PS": {
      "value": "4019433",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span><br \/>"
      }
    },
    "PA": {
      "value": "3571185",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Panama<\/span><br \/>"
      }
    },
    "PG": {
      "value": "7013829",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span><br \/>"
      }
    },
    "PY": {
      "name": "Paraguay",
      "value": "6568290",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br \/>"
      }
    },
    "NL": {
      "value": "16696000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br \/>"
      }
    },
    "PE": {
      "value": "29399817",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Peru<\/span><br \/>"
      }
    },
    "PH": {
      "value": "94852030",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Philippines<\/span><br \/>"
      }
    },
    "PL": {
      "value": "38216000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Poland<\/span><br \/>"
      }
    },
    "PT": {
      "value": "10637000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Portugal<\/span><br \/>"
      }
    },
    "QA": {
      "value": "1870041",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Qatar<\/span><br \/>"
      }
    },
    "DO": {
      "name": "República Dominicana",
      "value": "10056181",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">República Dominicana <\/span><br \/>"
      }
    },
    "RO": {
      "value": "21390000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Romania<\/span><br \/>"
      }
    },
    "GB": {
      "value": "62641000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br \/>"
      }
    },
    "RU": {
      "name": "Federación de Rusia",
      "value": "141930000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Federación de Rusia<\/span><br \/>"
      }
    },
    "RW": {
      "value": "10942950",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Rwanda<\/span><br \/>"
      }
    },
    "KN": {
      "value": "53051",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span><br \/>"
      }
    },
    "SM": {
      "value": "31735",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">San Marino<\/span><br \/>"
      }
    },
    "VC": {
      "value": "109365",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span><br \/>"
      }
    },
    "LC": {
      "value": "176000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span><br \/>"
      }
    },
    "SV": {
      "name": "El Salvador",
      "value": "6227491",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br \/>"
      }
    },
    "WS": {
      "value": "183874",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Samoa<\/span><br \/>"
      }
    },
    "ST": {
      "value": "168526",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span><br \/>"
      }
    },
    "SN": {
      "value": "12767556",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Senegal<\/span><br \/> "
      }
    },
    "RS": {
      "value": "7261000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Serbia<\/span><br \/>"
      }
    },
    "SC": {
      "value": "86000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br \/>"
      }
    },
    "SL": {
      "value": "5997486",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span><br \/>"
      }
    },
    "SG": {
      "name": "Singapur",
      "value": "5183700",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Singapur<\/span><br \/>"
      }
    },
    "SK": {
      "value": "5440000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Slovakia<\/span><br \/>"
      }
    },
    "SI": {
      "value": "2052000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Slovenia<\/span><br \/>"
      }
    },
    "SO": {
      "value": "9556873",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Somalia<\/span><br \/>"
      }
    },
    "SD": {
      "value": "34318385",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Sudan<\/span><br \/>"
      }
    },
    "SS": {
      "value": "10314021",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">South Sudan<\/span><br \/>"
      }
    },
    "LK": {
      "value": "20869000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br \/>"
      }
    },
    "SE": {
      "value": "9453000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Sweden<\/span><br \/>"
      }
    },
    "CH": {
      "value": "7907000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Switzerland<\/span><br \/>"
      }
    },
    "SR": {
      "value": "529419",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Suriname<\/span><br \/>"
      }
    },
    "SZ": {
      "value": "1067773",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Swaziland<\/span><br \/>"
      }
    },
    "SY": {
      "value": "20820311",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span><br \/>"
      }
    },
    "TJ": {
      "value": "6976958",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Tajikistan<\/span><br \/>"
      }
    },
    "TZ": {
      "value": "46218486",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span><br \/>"
      }
    },
    "TD": {
      "value": "11525496",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Chad<\/span><br \/>"
      }
    },
    "CZ": {
      "value": "10546000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Czech Republic<\/span><br \/>"
      }
    },
    "TH": {
      "value": "69518555",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Thailand<\/span><br \/>"
      }
    },
    "TL": {
      "value": "1175880",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Timor-leste<\/span><br \/>"
      }
    },
    "TG": {
      "value": "6154813",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Togo<\/span><br \/>"
      }
    },
    "TO": {
      "value": "104509",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Tonga<\/span><br \/>"
      }
    },
    "TT": {
      "value": "1346350",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span><br \/>"
      }
    },
    "TN": {
      "value": "10673800",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Tunisia<\/span><br \/>"
      }
    },
    "TM": {
      "value": "5105301",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span><br \/>"
      }
    },
    "TR": {
      "value": "73639596",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Turkey<\/span><br \/>"
      }
    },
    "TV": {
      "value": "9847",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Tuvalu<\/span><br \/>"
      }
    },
    "VU": {
      "value": "245619",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br \/>"
      }
    },
    "VE": {
      "name": "Venezuela",
      "value": "29278000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Republica Bolivariana de Venezuela,<\/span><br \/>"
      }
    },
    "VN": {
      "value": "87840000",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Viet Nam<\/span><br \/>"
      }
    },
    "UA": {
      "value": "45706100",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Ukraine<\/span><br \/>"
      }
    },
    "UY": {
      "name": "Uruguay",
      "value": "3368595",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br \/>"
      }
    },
    "YE": {
      "value": "24799880",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Yemen<\/span><br \/>"
      }
    },
    "ZM": {
      "value": "13474959",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Zambia<\/span><br \/>"
      }
    },
    "ZW": {
      "value": "12754378",
      "href": "#",
      "tooltip": {
        "content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span><br \/>"
      }
    }
  },
  //point in the map
  plots: {
    'Argentina': {
      latitude: -34.0000000,
      longitude: -64.0000000,
      value: 500000000,
      id: "AR",
      tooltip: { content: "Argentina" }
    },
    'Colombia': {
      latitude: 4.0000000,
      longitude: -72.0000000,
      value: 46927125,
      href: "#",
      id: "CO",
      tooltip: {
        content: 'Colombia'
      },
      // attrs: {
      //    fill: "yellow",
      //    r: 6
      // },

    }
  }
});

//countryes plots
var countryes = {
  'Argentina': {
    latitude: -34.0000000,
    longitude: -64.0000000,
    value: 500000000,
    id: "AR",
    tooltip: { content: "Argentina" }
  },
  'Australia': {
    latitude: -27.0000000,
    longitude: 133.0000000,
    value: 500000000,
    id: "AU",
    tooltip: { content: "Australia" }
  },
  'Bolivia': {
    latitude: -17.0000000,
    longitude: -65.0000000,
    value: 500000000,
    id: "BO",
    tooltip: { content: "Bolivia" }
  },
  'Brasil': {
    latitude: -15.781682,
    longitude: -47.924195,
    value: 200000001,
    id: "BR",
    tooltip: { content: "Brasil" }
  },
  'Canadá': {
    latitude: 60.0000000,
    longitude: -95.0000000,
    value: 200000001,
    id: "CA",
    tooltip: { content: "Canadá" }
  },
  'Chile': {
    latitude: -30.0000000,
    longitude: -71.0000000,
    value: 200000001,
    id: "CL",
    tooltip: { content: "Chile" }
  },
  'China': {
    latitude: 35.0000000,
    longitude: 105.0000000,
    value: 200000001,
    id: "CN",
    tooltip: { content: "China" }
  },
  'Colombia': {
    latitude: 4.0000000,
    longitude: -72.0000000,
    value: 46927125,
    href: "#",
    id: "CO",
    tooltip: {
      content: 'Colombia'
    },
    attrs: {
      // fill: "yellow"
      // r:8
    },
    //  mytext: "Curabitur imperdiet velit eu urna aliquet, vitae aliquam nisi molestie. Etiam in eleifend lectus. Ut id velit dignissim, tristique urna at, sodales massa. Ut ultrices mi at varius elementum. Integer id mi sagittis, congue orci a, tristique neque. Maecenas varius rutrum dui eget lacinia. Suspendisse rutrum, enim auctor ullamcorper vestibulum, enim justo suscipit velit, in pretium dui elit et nisi. Vivamus hendrerit ex tempus, consectetur est eu, maximus quam. Sed congue nunc sed dapibus sagittis. "
  },
  'Costa rica': {
    latitude: 10.0000000,
    longitude: -84.0000000,
    value: 200000001,
    id: "CR",
    tooltip: { content: "Costa Rica" }
  },
  'Ecuador': {
    latitude: -2.0000000,
    longitude: -77.5000000,
    value: 200000001,
    id: "EC",
    tooltip: { content: "Ecuador" }
  },
  'El Salvador': {
    latitude: 13.8333000,
    longitude: -88.9167000,
    value: 200000001,
    id: "SV",
    tooltip: { content: "El Salvador" }
  },
  'España': {
    latitude: 40.0000000,
    longitude: -4.0000000,
    value: 200000001,
    id: "ES",
    tooltip: { content: "España" }
  },
  'Estados Unidos': {
    latitude: 40.667,
    longitude: -73.833,
    value: 200001,
    id: "US",
    tooltip: { content: "Estados Unidos" }
  },
  'Guatemala': {
    latitude: 15.5000000,
    longitude: -90.2500000,
    value: 200001,
    id: "GT",
    tooltip: { content: "Guatemala" }
  },
  'Israel': {
    latitude: 31.5000000,
    longitude: 34.7500000,
    value: 200001,
    id: "IL",
    tooltip: { content: "Israel" }
  },
  'México': {
    latitude: 23.0000000,
    longitude: -102.0000000,
    value: 200001,
    id: "MX",
    tooltip: { content: "México" }
  },
  'Mongolia': {
    latitude: 46.0000000,
    longitude: 105.0000000,
    value: 200001,
    id: "MN",
    tooltip: { content: "Mongolia" }
  },
  'Nueva Zelanda': {
    latitude: -41.0000000,
    longitude: 174.0000000,
    value: 200001,
    id: "NZ",
    tooltip: { content: "Nueva Zelanda" }
  },
  // 'Francia': {
  //   latitude: 46.0000000,
  //   longitude: 2.0000000,
  //   value: 200001,
  //id: "",//   
  //tooltip: { content: "Francia" }
  // },
  // 'Honduras': {
  //   latitude: 15.0000000,
  //   longitude: -90.2500000,
  //   value: 200001,
  //id:"", 
  //tooltip: { content: "Honduras" }
  // },
  // 'Holanda': {
  //   latitude: 52.132633,
  //   longitude: 5.2912659999999505,
  //   value: 200001,
  // id:"",  
  // tooltip: { content: "Holanda" }
  // },
  // 'Italia': {
  //   latitude: 42.8333000,
  //   longitude: 12.8333000,
  //   value: 200001,
  //id:"",   
  //tooltip: { content: "Italia" }
  // },
  // 'Nicaragua': {
  //   latitude: 13.0000000,
  //   longitude: -85.0000000,
  //   value: 200001,
  //id:"",  
  //tooltip: { content: "Nicaragua" }
  // },
  'Paraguay': {
    latitude: -23.0000000,
    longitude: -58.0000000,
    value: 200001,
    id: "PY",
    tooltip: { content: "Paraguay" }
  },
  // 'Panama': {
  //   latitude: 9.0000000,
  //   longitude: -80.0000000,
  //   value: 200001,
  //id:"PA",  
  //tooltip: { content: "Panama" }
  // },

  'Peru': {
    latitude: -10.0000000,
    longitude: -76.0000000,
    value: 200001,
    id: "",
    tooltip: { content: "Peru" }
  },
  // 'Reino unido': {
  //   latitude: 54.0000000,
  //   longitude: -2.0000000,
  //   value: 200001,
  //id:"",  
  //tooltip: { content: "Reino unido" }
  //},
  'República dominicana': {
    latitude: 19.0000000,
    longitude: -70.6667000,
    value: 200001,
    id: "DO",
    tooltip: { content: "República dominicana" }
  },
  'Rusia': {
    latitude: 60.0000000,
    longitude: 100.0000000,
    value: 200001,
    id: "RU",
    tooltip: { content: "Rusia" }
  },
  'Singapur': {
    latitude: 1.3667000,
    longitude: 103.8000000,
    value: 200001,
    id: "SG",
    tooltip: { content: "Singapur" }
  },
  'Sudáfrica': {
    latitude: -29.0000000,
    longitude: 24.0000000,
    value: 200001,
    id: "ZA",
    tooltip: { content: "Sudáfrica" }
  },
  'Uruguay': {
    latitude: -33.0000000,
    longitude: -56.0000000,
    value: 200001,
    id: "UY",
    tooltip: { content: "Uruguay" }
  },
  'Venezuela': {
    latitude: 8.0000000,
    longitude: -66.0000000,
    value: 200001,
    id: "VE",
    tooltip: { content: "Venezuela" }
  },
  // 'sydney': {
  //   latitude: -33.917,
  //   longitude: 151.167,
  //   value: 600000,
  id: "", //   
  tooltip: { content: "Sydney<br />Population: 600000" }
  // },

  // 'tokyo': {
  //   latitude: 35.687418,
  //   longitude: 139.692306,
  //   value: 200001,
  //id: "",   
  //tooltip: { content: "Tokyo<br />Population: 200001" }
  // },
}

//animacion toast
function animationToast(country) {
  $(".menssage").text(country + ' Hola estamos celebrando la vida.')
  $(".menssage").addClass('show')
  setTimeout(function() { $(".menssage").removeClass('show'); }, 6000);
}

// search countryes
function searchCountry(country) {
  let newcountryes = countryes
  return ((typeof newcountryes[country] != 'undefined') ? newcountryes[country] : "No existe pais")
}

//Update plots maps and their parts
$("#refresh").click(() => {
  let country = $(".nameCountry").val()
  if (country != '') {
    let arrCountry = searchCountry(country)
      //console.log(arrCountry);
    if (arrCountry != 'No existe pais') {
      let idcountry = arrCountry.id
      let updatedOptions = { 'areas': {}, 'plots': {} };
      //update  areas the  maps
      updatedOptions.areas[idcountry] = {
          attrs: {
            fill: "#e2e5e8" //"#aedcf4"
          }
        }
        //show new plots in areas
      let newcountryes = {}
      newcountryes[country] = arrCountry
      $(".containerMapa").trigger('update', [{ mapOptions: updatedOptions, newPlots: newcountryes, animDuration: 1000 }]);
      animationToast(country)
    } else {
      alert(`${arrCountry}:${country}`)
    }
  }
})