import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
  'https://www.amazon.com/Best-Pet-Supplies-Voyager-Harness/dp/B08CCG96FR?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=949ea546a488216e197360eb8e55e46f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/rabbitgoo-Harness-Adjustable-Reflective-Control/dp/B0FKMM2ZJJ?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=6c028945e4d232545613a97f6c10576c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/PHOEPET-Harness-Reflective-Adjustable-Buckles/dp/B07GVCFQV6?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=bcdd747c920eeeebd704cbd8ee70b59d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/rabbitgoo-Harness-Breathable-Reflective-Walking/dp/B0DX67VRDW?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=6ff4f26ab2afaf94b726d36120db13c8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/tobeDRI-Harness-Adjustable-Reflective-Control/dp/B086PCQ3HQ?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=d2c3ececf9693efc97c3eb76ce7be6b0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Beebiepet-Tactical-Adjustable-Reflective-Harnesses/dp/B0CMHM46ZP?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=b8297b5791e0d2181244313873ed991c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bousnic-Dog-Shock-Collar-Rechargeable/dp/B0BCDH7CS1?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=8a5be644a122ecf4fa35fd6144584411&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FAFAFROG-Rechargeable-Adjustable-Sensitivity-Vibration/dp/B09VT74GKL?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=27463e16fa3fcd543cf818e086bc4427&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Jugbow-Dog-Shock-Collar-Rechargeable/dp/B0FN7S5WMJ?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=cbab2c5afc0c02932a67bc82170946e4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bousnic-Shock-Collar-Dogs-Rechargeable/dp/B09VXN6CM3?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=2e64f19503dc250ccbf393a11ea01d95&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/slopehill-Training-Electronic-Vibration-Waterproof/dp/B09DFRYNMD?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=518f37d2f7f0a4f1c8b47f12f8cae2bd&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dog-Shock-Collar-Dogs-10-120Lbs/dp/B0D9VZ78YV?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=15c26db7009a634fb0bc360598ed2f90&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/EHEYCIGA-Waterproof-Orthopedic-Egg-Crate-Removable/dp/B0BDLGZCTY?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=361bd05603f50ef4f883a118de7f4a66&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bedsure-Orthopedic-Removable-Washable-Waterproof/dp/B089RGDQBB?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=7ce73aaa0503d47357d0b1d69a338cdc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BFPETHOME-Large-Orthopedic-Medium-Crate/dp/B09N8W2SC4?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=290b1ded0f31146a25e4fea8c4460848&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Comfort-Expression-Waterproof-Orthopedic-Removable/dp/B0B1ZYGR52?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=b9ebb4385f723f1ad335915c3bffc527&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BFPETHOME-Orthopedic-Dogs-Waterproof-Removable-Waterproof/dp/B0BZNNN7H8?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=5a728af8861b89cfb501fc6cb16fe8dc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bedsure-Orthopedic-Beds-Large-Sized/dp/B0F1CM5RHT?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=5e9536e4474c89e1369668084c5e8d30&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MidWest-Folding-Protecting-Leak-Proof-Intermediate/dp/B000OXAES6?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=659d35c044d73c00ec1f737e9e0c3b17&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dog-Playpen-Foldable-Removable-Exercise/dp/B0CFQQN6KP?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=70643cd43a9d0b7e9377fbbf2b94a1f8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Amazon-Basics-Foldable-Metal-Single/dp/B09G4Y2C7D?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=ae640ad7d275732172ab0e00c014d3f7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FDW-Kennel-Folding-Removable-Divider/dp/B0DXK6R6Y6?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=62ee43b5706fb0274865ecc811e3d52d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Amazon-Basics-Portable-Hard-Sided-Ventilation/dp/B00OP6SVJW?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=defb1c7e13db406f9d29010c35804c7a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Amazon-Basics-Collapsible-Soft-Sided-Folding/dp/B0722KW6YJ?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=086b397f9a6ed439974421282b92677e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Maxpower-Planet-Pet-Grooming-Brush/dp/B07P2N8HQH?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=33110d424e90aeeedb8c3691a4c1785e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Swihauk-Cleaning-Friendly-Grooming-Deshedding/dp/B0CLLPVZRV?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=5782816d1f2ce340014c61838d3f23de&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Grooming-Undercoat-Dematting-Deshedding-Deshedder/dp/B0BZZC5PMF?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=639aef0af0fbc9e98a77dd8c49243146&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FURminator-Undercoat-Deshedding-Removes-Shedding/dp/B07MZBX5ZW?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=7217075f7312a45baf390272a6fa02d1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MIU-COLOR-Professional-Deshedding-Effectively/dp/B00DM1DDBW?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=1b5cce7b6b1376743166d2245121aa5d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Furminator-Long-deShedding-Large-Standard/dp/B07MZDGF5M?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=e2c6d8f17e2d7c9979ab5fd1e2138d13&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kuoser-Recovery-Professional-Abdominal-Substitute/dp/B08NCB3FXT?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=5148bf456a319b5330ac536452deb7cb&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FUAMEY-Recovery-Breathable-Bodysuit-Alternative/dp/B0CHYBKYQ4?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=57ab3e4bfc462c9c0d5e9b13651eb324&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Thundershirt-Anxiety-Jacket-Fuchsia-Medium/dp/B01FN4GVEQ?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=ff60b60502854c09860cc95d96c52873&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BellyGuard-Recovery-Surgery-Female-Surgical/dp/B07S872HFH?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=4033aafbc0b527adb9060e97248e05c3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ThunderShirt-Dogs-Small-Heather-Classic/dp/B003TTYQD6?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=8b6d02a3706fd424860735eb8b387d0d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/SurgiSnuggly-Dog-Surgical-Recovery-Suit-for-Female-Spay-or-Male-Dogs-Neuters/dp/B07WPWQKX7?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=0bd8d9559149ea8aced9d692b48ff879&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Natural-Farm-Bully-Sticks-Digestible/dp/B08QSG8L85?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=d91382838dd8c4a8ec494db332f13d3c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mighty-Paw-All-Natural-Protein-Rich-Single-Ingredient/dp/B09C2KBD12?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=c9e2598180f0336789e2a0009cbde885&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Best-Bully-Sticks-Natural-4-inch/dp/B01B6OLAAM?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=7c6d8391c1766561793012f3c1a5e1f3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Redbarn-Bully-Sticks-Dogs-Long-Lasting/dp/B0BNLS6T7H?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=c94fffc47701b636078cac40ceb200c5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Pawstruck-Sticks-Natural-Odorless-Bullie/dp/B07SLMTVXS?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=ce001e41b553723d1e8dbc8b469b4015&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cowdog-Chews-Beef-Bully-Stick/dp/B0D4R4Q4C7?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=ef20e2f5977a4b21dc25d16c4babaaee&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Elevated-Medium-Height-Adjustable-Stainless/dp/B0CRV41Q3Y?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=c1443b6fcce56b075fca40a8abbb19f2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Amazon-Basics-Stainless-Two-Pack-Inches/dp/B01DOP5S9K?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=97a0cfdd75298c5f4c4c5fa30495ae1b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Stainless-Capacity-Larges-X-Large-Gallons/dp/B0B7W1BXZV?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=e3ced74909aa19a3e2e66c3a9d8f999a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gardner-Pet-Automatic-Dispenser-Large-Sized/dp/B0CQ7GLH2D?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=13790a0eb8d57b81e2acf2c81370f499&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wefeedy-Automatic-Dispenser-Gravity-Capacity/dp/B0F9F27VFY?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=391ba352784bfb083761f8b6c98af49f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/VOLUAS-Automatic-Cat-Feeders-Dispenser/dp/B09LD2CD1L?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=efd41d9d5e1cc5c23b1220f6d7b16b6b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/AmazonBasics-Waste-Bags-Dispenser-Leash/dp/B00NABTG60?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=a0cacef701b4d551588f276d9e4400ca&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Earth-Rated-Dog-Poop-Dispenser/dp/B08VN2W5NC?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=819418e1a837f1ecdad96310f3df54c4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gorilla-Supply-Waste-Dispenser-Leash/dp/B00TFYT2WY?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=7f59f5187155a3eca4a903df743eeefe&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Yingdelai-Biodegradable-Dispenser-eco-Friendly-Leak-Proof/dp/B07RJ28SK9?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=c27606a5e4b3a49c335eb5ef1d78ad80&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/VETRESKA-Dispenser-Blossom-Scented-Walking/dp/B0BVMHM3MW?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=c304944bb35a199d268da9b5a5622a85&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Downtown-Pet-Supply-Dispensers-Rainbow/dp/B00QUHIGI0?th=1&linkCode=ll2&tag=pawcraftden-20&linkId=cd46757b650ef381c3a9f3709860b187&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'pawden'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


export const config = {
  matcher: ['/'],
}

