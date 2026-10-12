# Fleet and pricing update, 12 October 2026

Source: the rate-sheet image and vehicle images provided by the user in this chat. The user confirmed the obscured Audi long-term rate as AED 3,800 and mileage as 250 km/day and 4,500 km/month. Long-term figures below are monthly charges for rentals of at least five months.

| Vehicle | Year | Monthly AED | 5+ month AED/month |
|---|---|---:|---:|
| Mitsubishi Attrage | 2024 | 1,400 | 1,200 |
| Mitsubishi Attrage | 2025 | 1,600 | 1,300 |
| Nissan Sunny | 2025 | 1,700 | 1,300 |
| Audi A6 | 2022 | 4,500 | 3,800 |
| Cadillac Escalade | 2023 | 12,500 | 10,500 |
| Mitsubishi Outlander | 2024 | 3,200 | 3,000 |
| Mitsubishi Outlander | 2025 | 3,200 | 3,000 |
| Range Rover Vogue | 2024 | 23,000 | 19,000 |
| Mitsubishi ASX | 2024 | 2,300 | 2,000 |
| Mitsubishi ASX | 2025 | 2,450 | 2,100 |
| Mitsubishi Xpander | 2024 | 2,500 | 2,300 |
| Mitsubishi Xpander | 2025 | 2,600 | 2,400 |
| Mitsubishi ASX | 2027 | 2,500 | 2,200 |
| Mitsubishi Destinator | 2027 | 3,100 | 2,800 |
| Chevrolet Suburban | Not supplied | 8,000 | Not supplied |

The spreadsheet's Nissan Attrage label was corrected to Mitsubishi Attrage. Existing daily and weekly luxury prices were retained except for the explicitly supplied Suburban rates: AED 550 daily and AED 3,465 weekly (550 × 7 × 0.9). All non-luxury daily and weekly price fields were removed.

Model pages for existing cars retain their URLs. Multiple years appear as separate rows on those pages and the monthly comparison table. The 2027 ASX and Destinator have separate pages and supplied images. Their model years are user-supplied; the Destinator seven-seat layout is supported by [Mitsubishi's model announcement](https://www.mitsubishi-motors.com/en/newsroom/newsrelease/2025/20250717_1.html). No unverified engine, trim or luggage specifications were added for the new cars.

Weekly mileage, excess-mileage charges, and the Suburban year and long-term price remain unspecified. The licence number remains visible and in Organization identifier schema; sales metadata focuses on rental information.

Run `npm run lint` and `npm run build`. The production audit now checks vehicle price markup against the fleet data, visible monthly prices, mileage and retired economy price strings in HTML and llms.txt.
