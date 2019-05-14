const allCountriesList = require('../index');

describe('.allCountriesList', () => {
  it('when retrieving only one attribute', () => {
    const countriesList = [
      'Andorra',
      'United Arab Emirates',
      'Afghanistan',
      'Antigua and Barbuda',
      'Anguilla',
      'Albania',
      'Armenia',
      'Angola',
      'Antarctica',
      'Argentina',
      'American Samoa',
      'Austria',
      'Australia',
      'Aruba',
      'Åland Islands',
      'Azerbaijan',
      'Bosnia and Herzegovina',
      'Barbados',
      'Bangladesh',
      'Belgium',
      'Burkina Faso',
      'Bulgaria',
      'Bahrain',
      'Burundi',
      'Benin',
      'Saint Barthélemy',
      'Bermuda',
      'Brunei Darussalam',
      'Bolivia (Plurinational State of)',
      'Bonaire, Sint Eustatius and Saba',
      'Brazil',
      'Bahamas',
      'Bhutan',
      'Bouvet Island',
      'Botswana',
      'Belarus',
      'Belize',
      'Canada',
      'Cocos (Keeling) Islands',
      'Congo (Democratic Republic of the)',
      'Central African Republic',
      'Congo',
      'Switzerland',
      "Côte d'Ivoire",
      'Cook Islands',
      'Chile',
      'Cameroon',
      'China',
      'Colombia',
      'Costa Rica',
      'Cuba',
      'Cabo Verde',
      'Curaçao',
      'Christmas Island',
      'Cyprus',
      'Czech Republic',
      'Germany',
      'Djibouti',
      'Denmark',
      'Dominica',
      'Dominican Republic',
      'Algeria',
      'Ecuador',
      'Estonia',
      'Egypt',
      'Western Sahara',
      'Eritrea',
      'Spain',
      'Ethiopia',
      'Finland',
      'Fiji',
      'Falkland Islands (Malvinas)',
      'Micronesia (Federated States of)',
      'Faroe Islands',
      'France',
      'Gabon',
      'United Kingdom of Great Britain and Northern Ireland',
      'Grenada',
      'Georgia',
      'French Guiana',
      'Guernsey',
      'Ghana',
      'Gibraltar',
      'Greenland',
      'Gambia',
      'Guinea',
      'Guadeloupe',
      'Equatorial Guinea',
      'Greece',
      'South Georgia and the South Sandwich Islands',
      'Guatemala',
      'Guam',
      'Guinea-Bissau',
      'Guyana',
      'Hong Kong',
      'Heard Island and McDonald Islands',
      'Honduras',
      'Croatia',
      'Haiti',
      'Hungary',
      'Indonesia',
      'Ireland',
      'Israel',
      'Isle of Man',
      'India',
      'British Indian Ocean Territory',
      'Iraq',
      'Iran (Islamic Republic of)',
      'Iceland',
      'Italy',
      'Jersey',
      'Jamaica',
      'Jordan',
      'Japan',
      'Kenya',
      'Kyrgyzstan',
      'Cambodia',
      'Kiribati',
      'Comoros',
      'Saint Kitts and Nevis',
      "Korea (Democratic People's Republic of)",
      'Korea (Republic of)',
      'Kuwait',
      'Cayman Islands',
      'Kazakhstan',
      "Lao People's Democratic Republic",
      'Lebanon',
      'Saint Lucia',
      'Liechtenstein',
      'Sri Lanka',
      'Liberia',
      'Lesotho',
      'Lithuania',
      'Luxembourg',
      'Latvia',
      'Libya',
      'Morocco',
      'Monaco',
      'Moldova (Republic of)',
      'Montenegro',
      'Saint Martin (French part)',
      'Madagascar',
      'Marshall Islands',
      'Macedonia (the former Yugoslav Republic of)',
      'Mali',
      'Myanmar',
      'Mongolia',
      'Macao',
      'Northern Mariana Islands',
      'Martinique',
      'Mauritania',
      'Montserrat',
      'Malta',
      'Mauritius',
      'Maldives',
      'Malawi',
      'Mexico',
      'Malaysia',
      'Mozambique',
      'Namibia',
      'New Caledonia',
      'Niger',
      'Norfolk Island',
      'Nigeria',
      'Nicaragua',
      'Netherlands',
      'Norway',
      'Nepal',
      'Nauru',
      'Niue',
      'New Zealand',
      'Oman',
      'Panama',
      'Peru',
      'French Polynesia',
      'Papua New Guinea',
      'Philippines',
      'Pakistan',
      'Poland',
      'Saint Pierre and Miquelon',
      'Pitcairn',
      'Puerto Rico',
      'Palestine, State of',
      'Portugal',
      'Palau',
      'Paraguay',
      'Qatar',
      'Réunion',
      'Romania',
      'Serbia',
      'Russian Federation',
      'Rwanda',
      'Saudi Arabia',
      'Solomon Islands',
      'Seychelles',
      'Sudan',
      'Sweden',
      'Singapore',
      'Saint Helena, Ascension and Tristan da Cunha',
      'Slovenia',
      'Svalbard and Jan Mayen',
      'Slovakia',
      'Sierra Leone',
      'San Marino',
      'Senegal',
      'Somalia',
      'Suriname',
      'South Sudan',
      'Sao Tome and Principe',
      'El Salvador',
      'Sint Maarten (Dutch part)',
      'Syrian Arab Republic',
      'eSwatini',
      'Turks and Caicos Islands',
      'Chad',
      'French Southern Territories',
      'Togo',
      'Thailand',
      'Tajikistan',
      'Tokelau',
      'Timor-Leste',
      'Turkmenistan',
      'Tunisia',
      'Tonga',
      'Turkey',
      'Trinidad and Tobago',
      'Tuvalu',
      'Taiwan, Province of China',
      'Tanzania, United Republic of',
      'Ukraine',
      'Uganda',
      'United States Minor Outlying Islands',
      'United States of America',
      'Uruguay',
      'Uzbekistan',
      'Holy See',
      'Saint Vincent and the Grenadines',
      'Venezuela (Bolivarian Republic of)',
      'Virgin Islands (British)',
      'Virgin Islands (U.S.)',
      'Viet Nam',
      'Vanuatu',
      'Wallis and Futuna',
      'Samoa',
      'Yemen',
      'Mayotte',
      'South Africa',
      'Zambia',
      'Zimbabwe',
    ];

    expect(allCountriesList('name')).toEqual(countriesList);
  });

  it('when retrieving several attributes', () => {
    const countriesList = [
      {
        alpha3: 'AND',
        name: 'Andorra',
      },
      {
        alpha3: 'ARE',
        name: 'United Arab Emirates',
      },
      {
        alpha3: 'AFG',
        name: 'Afghanistan',
      },
      {
        alpha3: 'ATG',
        name: 'Antigua and Barbuda',
      },
      {
        alpha3: 'AIA',
        name: 'Anguilla',
      },
      {
        alpha3: 'ALB',
        name: 'Albania',
      },
      {
        alpha3: 'ARM',
        name: 'Armenia',
      },
      {
        alpha3: 'AGO',
        name: 'Angola',
      },
      {
        alpha3: 'ATA',
        name: 'Antarctica',
      },
      {
        alpha3: 'ARG',
        name: 'Argentina',
      },
      {
        alpha3: 'ASM',
        name: 'American Samoa',
      },
      {
        alpha3: 'AUT',
        name: 'Austria',
      },
      {
        alpha3: 'AUS',
        name: 'Australia',
      },
      {
        alpha3: 'ABW',
        name: 'Aruba',
      },
      {
        alpha3: 'ALA',
        name: 'Åland Islands',
      },
      {
        alpha3: 'AZE',
        name: 'Azerbaijan',
      },
      {
        alpha3: 'BIH',
        name: 'Bosnia and Herzegovina',
      },
      {
        alpha3: 'BRB',
        name: 'Barbados',
      },
      {
        alpha3: 'BGD',
        name: 'Bangladesh',
      },
      {
        alpha3: 'BEL',
        name: 'Belgium',
      },
      {
        alpha3: 'BFA',
        name: 'Burkina Faso',
      },
      {
        alpha3: 'BGR',
        name: 'Bulgaria',
      },
      {
        alpha3: 'BHR',
        name: 'Bahrain',
      },
      {
        alpha3: 'BDI',
        name: 'Burundi',
      },
      {
        alpha3: 'BEN',
        name: 'Benin',
      },
      {
        alpha3: 'BLM',
        name: 'Saint Barthélemy',
      },
      {
        alpha3: 'BMU',
        name: 'Bermuda',
      },
      {
        alpha3: 'BRN',
        name: 'Brunei Darussalam',
      },
      {
        alpha3: 'BOL',
        name: 'Bolivia (Plurinational State of)',
      },
      {
        alpha3: 'BES',
        name: 'Bonaire, Sint Eustatius and Saba',
      },
      {
        alpha3: 'BRA',
        name: 'Brazil',
      },
      {
        alpha3: 'BHS',
        name: 'Bahamas',
      },
      {
        alpha3: 'BTN',
        name: 'Bhutan',
      },
      {
        alpha3: 'BVT',
        name: 'Bouvet Island',
      },
      {
        alpha3: 'BWA',
        name: 'Botswana',
      },
      {
        alpha3: 'BLR',
        name: 'Belarus',
      },
      {
        alpha3: 'BLZ',
        name: 'Belize',
      },
      {
        alpha3: 'CAN',
        name: 'Canada',
      },
      {
        alpha3: 'CCK',
        name: 'Cocos (Keeling) Islands',
      },
      {
        alpha3: 'COD',
        name: 'Congo (Democratic Republic of the)',
      },
      {
        alpha3: 'CAF',
        name: 'Central African Republic',
      },
      {
        alpha3: 'COG',
        name: 'Congo',
      },
      {
        alpha3: 'CHE',
        name: 'Switzerland',
      },
      {
        alpha3: 'CIV',
        name: "Côte d'Ivoire",
      },
      {
        alpha3: 'COK',
        name: 'Cook Islands',
      },
      {
        alpha3: 'CHL',
        name: 'Chile',
      },
      {
        alpha3: 'CMR',
        name: 'Cameroon',
      },
      {
        alpha3: 'CHN',
        name: 'China',
      },
      {
        alpha3: 'COL',
        name: 'Colombia',
      },
      {
        alpha3: 'CRI',
        name: 'Costa Rica',
      },
      {
        alpha3: 'CUB',
        name: 'Cuba',
      },
      {
        alpha3: 'CPV',
        name: 'Cabo Verde',
      },
      {
        alpha3: 'CUW',
        name: 'Curaçao',
      },
      {
        alpha3: 'CXR',
        name: 'Christmas Island',
      },
      {
        alpha3: 'CYP',
        name: 'Cyprus',
      },
      {
        alpha3: 'CZE',
        name: 'Czech Republic',
      },
      {
        alpha3: 'DEU',
        name: 'Germany',
      },
      {
        alpha3: 'DJI',
        name: 'Djibouti',
      },
      {
        alpha3: 'DNK',
        name: 'Denmark',
      },
      {
        alpha3: 'DMA',
        name: 'Dominica',
      },
      {
        alpha3: 'DOM',
        name: 'Dominican Republic',
      },
      {
        alpha3: 'DZA',
        name: 'Algeria',
      },
      {
        alpha3: 'ECU',
        name: 'Ecuador',
      },
      {
        alpha3: 'EST',
        name: 'Estonia',
      },
      {
        alpha3: 'EGY',
        name: 'Egypt',
      },
      {
        alpha3: 'ESH',
        name: 'Western Sahara',
      },
      {
        alpha3: 'ERI',
        name: 'Eritrea',
      },
      {
        alpha3: 'ESP',
        name: 'Spain',
      },
      {
        alpha3: 'ETH',
        name: 'Ethiopia',
      },
      {
        alpha3: 'FIN',
        name: 'Finland',
      },
      {
        alpha3: 'FJI',
        name: 'Fiji',
      },
      {
        alpha3: 'FLK',
        name: 'Falkland Islands (Malvinas)',
      },
      {
        alpha3: 'FSM',
        name: 'Micronesia (Federated States of)',
      },
      {
        alpha3: 'FRO',
        name: 'Faroe Islands',
      },
      {
        alpha3: 'FRA',
        name: 'France',
      },
      {
        alpha3: 'GAB',
        name: 'Gabon',
      },
      {
        alpha3: 'GBR',
        name: 'United Kingdom of Great Britain and Northern Ireland',
      },
      {
        alpha3: 'GRD',
        name: 'Grenada',
      },
      {
        alpha3: 'GEO',
        name: 'Georgia',
      },
      {
        alpha3: 'GUF',
        name: 'French Guiana',
      },
      {
        alpha3: 'GGY',
        name: 'Guernsey',
      },
      {
        alpha3: 'GHA',
        name: 'Ghana',
      },
      {
        alpha3: 'GIB',
        name: 'Gibraltar',
      },
      {
        alpha3: 'GRL',
        name: 'Greenland',
      },
      {
        alpha3: 'GMB',
        name: 'Gambia',
      },
      {
        alpha3: 'GIN',
        name: 'Guinea',
      },
      {
        alpha3: 'GLP',
        name: 'Guadeloupe',
      },
      {
        alpha3: 'GNQ',
        name: 'Equatorial Guinea',
      },
      {
        alpha3: 'GRC',
        name: 'Greece',
      },
      {
        alpha3: 'SGS',
        name: 'South Georgia and the South Sandwich Islands',
      },
      {
        alpha3: 'GTM',
        name: 'Guatemala',
      },
      {
        alpha3: 'GUM',
        name: 'Guam',
      },
      {
        alpha3: 'GNB',
        name: 'Guinea-Bissau',
      },
      {
        alpha3: 'GUY',
        name: 'Guyana',
      },
      {
        alpha3: 'HKG',
        name: 'Hong Kong',
      },
      {
        alpha3: 'HMD',
        name: 'Heard Island and McDonald Islands',
      },
      {
        alpha3: 'HND',
        name: 'Honduras',
      },
      {
        alpha3: 'HRV',
        name: 'Croatia',
      },
      {
        alpha3: 'HTI',
        name: 'Haiti',
      },
      {
        alpha3: 'HUN',
        name: 'Hungary',
      },
      {
        alpha3: 'IDN',
        name: 'Indonesia',
      },
      {
        alpha3: 'IRL',
        name: 'Ireland',
      },
      {
        alpha3: 'ISR',
        name: 'Israel',
      },
      {
        alpha3: 'IMN',
        name: 'Isle of Man',
      },
      {
        alpha3: 'IND',
        name: 'India',
      },
      {
        alpha3: 'IOT',
        name: 'British Indian Ocean Territory',
      },
      {
        alpha3: 'IRQ',
        name: 'Iraq',
      },
      {
        alpha3: 'IRN',
        name: 'Iran (Islamic Republic of)',
      },
      {
        alpha3: 'ISL',
        name: 'Iceland',
      },
      {
        alpha3: 'ITA',
        name: 'Italy',
      },
      {
        alpha3: 'JEY',
        name: 'Jersey',
      },
      {
        alpha3: 'JAM',
        name: 'Jamaica',
      },
      {
        alpha3: 'JOR',
        name: 'Jordan',
      },
      {
        alpha3: 'JPN',
        name: 'Japan',
      },
      {
        alpha3: 'KEN',
        name: 'Kenya',
      },
      {
        alpha3: 'KGZ',
        name: 'Kyrgyzstan',
      },
      {
        alpha3: 'KHM',
        name: 'Cambodia',
      },
      {
        alpha3: 'KIR',
        name: 'Kiribati',
      },
      {
        alpha3: 'COM',
        name: 'Comoros',
      },
      {
        alpha3: 'KNA',
        name: 'Saint Kitts and Nevis',
      },
      {
        alpha3: 'PRK',
        name: "Korea (Democratic People's Republic of)",
      },
      {
        alpha3: 'KOR',
        name: 'Korea (Republic of)',
      },
      {
        alpha3: 'KWT',
        name: 'Kuwait',
      },
      {
        alpha3: 'CYM',
        name: 'Cayman Islands',
      },
      {
        alpha3: 'KAZ',
        name: 'Kazakhstan',
      },
      {
        alpha3: 'LAO',
        name: "Lao People's Democratic Republic",
      },
      {
        alpha3: 'LBN',
        name: 'Lebanon',
      },
      {
        alpha3: 'LCA',
        name: 'Saint Lucia',
      },
      {
        alpha3: 'LIE',
        name: 'Liechtenstein',
      },
      {
        alpha3: 'LKA',
        name: 'Sri Lanka',
      },
      {
        alpha3: 'LBR',
        name: 'Liberia',
      },
      {
        alpha3: 'LSO',
        name: 'Lesotho',
      },
      {
        alpha3: 'LTU',
        name: 'Lithuania',
      },
      {
        alpha3: 'LUX',
        name: 'Luxembourg',
      },
      {
        alpha3: 'LVA',
        name: 'Latvia',
      },
      {
        alpha3: 'LBY',
        name: 'Libya',
      },
      {
        alpha3: 'MAR',
        name: 'Morocco',
      },
      {
        alpha3: 'MCO',
        name: 'Monaco',
      },
      {
        alpha3: 'MDA',
        name: 'Moldova (Republic of)',
      },
      {
        alpha3: 'MNE',
        name: 'Montenegro',
      },
      {
        alpha3: 'MAF',
        name: 'Saint Martin (French part)',
      },
      {
        alpha3: 'MDG',
        name: 'Madagascar',
      },
      {
        alpha3: 'MHL',
        name: 'Marshall Islands',
      },
      {
        alpha3: 'MKD',
        name: 'Macedonia (the former Yugoslav Republic of)',
      },
      {
        alpha3: 'MLI',
        name: 'Mali',
      },
      {
        alpha3: 'MMR',
        name: 'Myanmar',
      },
      {
        alpha3: 'MNG',
        name: 'Mongolia',
      },
      {
        alpha3: 'MAC',
        name: 'Macao',
      },
      {
        alpha3: 'MNP',
        name: 'Northern Mariana Islands',
      },
      {
        alpha3: 'MTQ',
        name: 'Martinique',
      },
      {
        alpha3: 'MRT',
        name: 'Mauritania',
      },
      {
        alpha3: 'MSR',
        name: 'Montserrat',
      },
      {
        alpha3: 'MLT',
        name: 'Malta',
      },
      {
        alpha3: 'MUS',
        name: 'Mauritius',
      },
      {
        alpha3: 'MDV',
        name: 'Maldives',
      },
      {
        alpha3: 'MWI',
        name: 'Malawi',
      },
      {
        alpha3: 'MEX',
        name: 'Mexico',
      },
      {
        alpha3: 'MYS',
        name: 'Malaysia',
      },
      {
        alpha3: 'MOZ',
        name: 'Mozambique',
      },
      {
        alpha3: 'NAM',
        name: 'Namibia',
      },
      {
        alpha3: 'NCL',
        name: 'New Caledonia',
      },
      {
        alpha3: 'NER',
        name: 'Niger',
      },
      {
        alpha3: 'NFK',
        name: 'Norfolk Island',
      },
      {
        alpha3: 'NGA',
        name: 'Nigeria',
      },
      {
        alpha3: 'NIC',
        name: 'Nicaragua',
      },
      {
        alpha3: 'NLD',
        name: 'Netherlands',
      },
      {
        alpha3: 'NOR',
        name: 'Norway',
      },
      {
        alpha3: 'NPL',
        name: 'Nepal',
      },
      {
        alpha3: 'NRU',
        name: 'Nauru',
      },
      {
        alpha3: 'NIU',
        name: 'Niue',
      },
      {
        alpha3: 'NZL',
        name: 'New Zealand',
      },
      {
        alpha3: 'OMN',
        name: 'Oman',
      },
      {
        alpha3: 'PAN',
        name: 'Panama',
      },
      {
        alpha3: 'PER',
        name: 'Peru',
      },
      {
        alpha3: 'PYF',
        name: 'French Polynesia',
      },
      {
        alpha3: 'PNG',
        name: 'Papua New Guinea',
      },
      {
        alpha3: 'PHL',
        name: 'Philippines',
      },
      {
        alpha3: 'PAK',
        name: 'Pakistan',
      },
      {
        alpha3: 'POL',
        name: 'Poland',
      },
      {
        alpha3: 'SPM',
        name: 'Saint Pierre and Miquelon',
      },
      {
        alpha3: 'PCN',
        name: 'Pitcairn',
      },
      {
        alpha3: 'PRI',
        name: 'Puerto Rico',
      },
      {
        alpha3: 'PSE',
        name: 'Palestine, State of',
      },
      {
        alpha3: 'PRT',
        name: 'Portugal',
      },
      {
        alpha3: 'PLW',
        name: 'Palau',
      },
      {
        alpha3: 'PRY',
        name: 'Paraguay',
      },
      {
        alpha3: 'QAT',
        name: 'Qatar',
      },
      {
        alpha3: 'REU',
        name: 'Réunion',
      },
      {
        alpha3: 'ROU',
        name: 'Romania',
      },
      {
        alpha3: 'SRB',
        name: 'Serbia',
      },
      {
        alpha3: 'RUS',
        name: 'Russian Federation',
      },
      {
        alpha3: 'RWA',
        name: 'Rwanda',
      },
      {
        alpha3: 'SAU',
        name: 'Saudi Arabia',
      },
      {
        alpha3: 'SLB',
        name: 'Solomon Islands',
      },
      {
        alpha3: 'SYC',
        name: 'Seychelles',
      },
      {
        alpha3: 'SDN',
        name: 'Sudan',
      },
      {
        alpha3: 'SWE',
        name: 'Sweden',
      },
      {
        alpha3: 'SGP',
        name: 'Singapore',
      },
      {
        alpha3: 'SHN',
        name: 'Saint Helena, Ascension and Tristan da Cunha',
      },
      {
        alpha3: 'SVN',
        name: 'Slovenia',
      },
      {
        alpha3: 'SJM',
        name: 'Svalbard and Jan Mayen',
      },
      {
        alpha3: 'SVK',
        name: 'Slovakia',
      },
      {
        alpha3: 'SLE',
        name: 'Sierra Leone',
      },
      {
        alpha3: 'SMR',
        name: 'San Marino',
      },
      {
        alpha3: 'SEN',
        name: 'Senegal',
      },
      {
        alpha3: 'SOM',
        name: 'Somalia',
      },
      {
        alpha3: 'SUR',
        name: 'Suriname',
      },
      {
        alpha3: 'SSD',
        name: 'South Sudan',
      },
      {
        alpha3: 'STP',
        name: 'Sao Tome and Principe',
      },
      {
        alpha3: 'SLV',
        name: 'El Salvador',
      },
      {
        alpha3: 'SXM',
        name: 'Sint Maarten (Dutch part)',
      },
      {
        alpha3: 'SYR',
        name: 'Syrian Arab Republic',
      },
      {
        alpha3: 'SWZ',
        name: 'eSwatini',
      },
      {
        alpha3: 'TCA',
        name: 'Turks and Caicos Islands',
      },
      {
        alpha3: 'TCD',
        name: 'Chad',
      },
      {
        alpha3: 'ATF',
        name: 'French Southern Territories',
      },
      {
        alpha3: 'TGO',
        name: 'Togo',
      },
      {
        alpha3: 'THA',
        name: 'Thailand',
      },
      {
        alpha3: 'TJK',
        name: 'Tajikistan',
      },
      {
        alpha3: 'TKL',
        name: 'Tokelau',
      },
      {
        alpha3: 'TLS',
        name: 'Timor-Leste',
      },
      {
        alpha3: 'TKM',
        name: 'Turkmenistan',
      },
      {
        alpha3: 'TUN',
        name: 'Tunisia',
      },
      {
        alpha3: 'TON',
        name: 'Tonga',
      },
      {
        alpha3: 'TUR',
        name: 'Turkey',
      },
      {
        alpha3: 'TTO',
        name: 'Trinidad and Tobago',
      },
      {
        alpha3: 'TUV',
        name: 'Tuvalu',
      },
      {
        alpha3: 'TWN',
        name: 'Taiwan, Province of China',
      },
      {
        alpha3: 'TZA',
        name: 'Tanzania, United Republic of',
      },
      {
        alpha3: 'UKR',
        name: 'Ukraine',
      },
      {
        alpha3: 'UGA',
        name: 'Uganda',
      },
      {
        alpha3: 'UMI',
        name: 'United States Minor Outlying Islands',
      },
      {
        alpha3: 'USA',
        name: 'United States of America',
      },
      {
        alpha3: 'URY',
        name: 'Uruguay',
      },
      {
        alpha3: 'UZB',
        name: 'Uzbekistan',
      },
      {
        alpha3: 'VAT',
        name: 'Holy See',
      },
      {
        alpha3: 'VCT',
        name: 'Saint Vincent and the Grenadines',
      },
      {
        alpha3: 'VEN',
        name: 'Venezuela (Bolivarian Republic of)',
      },
      {
        alpha3: 'VGB',
        name: 'Virgin Islands (British)',
      },
      {
        alpha3: 'VIR',
        name: 'Virgin Islands (U.S.)',
      },
      {
        alpha3: 'VNM',
        name: 'Viet Nam',
      },
      {
        alpha3: 'VUT',
        name: 'Vanuatu',
      },
      {
        alpha3: 'WLF',
        name: 'Wallis and Futuna',
      },
      {
        alpha3: 'WSM',
        name: 'Samoa',
      },
      {
        alpha3: 'YEM',
        name: 'Yemen',
      },
      {
        alpha3: 'MYT',
        name: 'Mayotte',
      },
      {
        alpha3: 'ZAF',
        name: 'South Africa',
      },
      {
        alpha3: 'ZMB',
        name: 'Zambia',
      },
      {
        alpha3: 'ZWE',
        name: 'Zimbabwe',
      },
    ];

    expect(allCountriesList('name', 'alpha3')).toEqual(countriesList);
  });
});
