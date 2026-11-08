// Public WebP names from the private image ledger; unknown IDs are never inferred.
const CardImageResolver = (() => {
  // Change only this value to switch delivery. No credentials belong in this file.
  const source = 'worker'; // 'local' | 'worker'
  const workerBase = 'https://holodori-image-proxy.nikkinikky65.workers.dev/';
  if(!['local','worker'].includes(source)) throw new Error('Unknown card image source: '+source);
  function imageUrl(path){
    return source === 'local' ? path : workerBase + path.replace(/^assets\//, '');
  }
  const images = {
  "c0016": {
    "thin": "assets/cards/portrait/tokino-sora-r5-c001.webp",
    "thumb": "assets/cards/thumb/tokino-sora-r5-c001.webp",
    "full": "assets/cards/full/tokino-sora-r5-c001.webp"
  },
  "c0096": {
    "thin": "assets/cards/portrait/robocosan-r5-c001.webp",
    "thumb": "assets/cards/thumb/robocosan-r5-c001.webp",
    "full": "assets/cards/full/robocosan-r5-c001.webp"
  },
  "c0142": {
    "thin": "assets/cards/portrait/aki-rosenthal-r5-c001.webp",
    "thumb": "assets/cards/thumb/aki-rosenthal-r5-c001.webp",
    "full": "assets/cards/full/aki-rosenthal-r5-c001.webp"
  },
  "c0130": {
    "thin": "assets/cards/portrait/aki-rosenthal-r5-c002.webp",
    "thumb": "assets/cards/thumb/aki-rosenthal-r5-c002.webp",
    "full": "assets/cards/full/aki-rosenthal-r5-c002.webp"
  },
  "c0108": {
    "thin": "assets/cards/portrait/akai-haato-r5-c001.webp",
    "thumb": "assets/cards/thumb/akai-haato-r5-c001.webp",
    "full": "assets/cards/full/akai-haato-r5-c001.webp"
  },
  "c0180": {
    "thin": "assets/cards/portrait/shirakami-fubuki-r5-c001.webp",
    "thumb": "assets/cards/thumb/shirakami-fubuki-r5-c001.webp",
    "full": "assets/cards/full/shirakami-fubuki-r5-c001.webp"
  },
  "c0070": {
    "thin": "assets/cards/portrait/shirakami-fubuki-r5-c002.webp",
    "thumb": "assets/cards/thumb/shirakami-fubuki-r5-c002.webp",
    "full": "assets/cards/full/shirakami-fubuki-r5-c002.webp"
  },
  "c0200": {
    "thin": "assets/cards/portrait/natsuiro-matsuri-r5-c001.webp",
    "thumb": "assets/cards/thumb/natsuiro-matsuri-r5-c001.webp",
    "full": "assets/cards/full/natsuiro-matsuri-r5-c001.webp"
  },
  "c0047": {
    "thin": "assets/cards/portrait/nakiri-ayame-r5-c001.webp",
    "thumb": "assets/cards/thumb/nakiri-ayame-r5-c001.webp",
    "full": "assets/cards/full/nakiri-ayame-r5-c001.webp"
  },
  "c0194": {
    "thin": "assets/cards/portrait/nakiri-ayame-r5-c002.webp",
    "thumb": "assets/cards/thumb/nakiri-ayame-r5-c002.webp",
    "full": "assets/cards/full/nakiri-ayame-r5-c002.webp"
  },
  "c0042": {
    "thin": "assets/cards/portrait/yuzuki-choco-r5-c001.webp",
    "thumb": "assets/cards/thumb/yuzuki-choco-r5-c001.webp",
    "full": "assets/cards/full/yuzuki-choco-r5-c001.webp"
  },
  "c0196": {
    "thin": "assets/cards/portrait/oozora-subaru-r5-c001.webp",
    "thumb": "assets/cards/thumb/oozora-subaru-r5-c001.webp",
    "full": "assets/cards/full/oozora-subaru-r5-c001.webp"
  },
  "c0025": {
    "thin": "assets/cards/portrait/oozora-subaru-r5-c002.webp",
    "thumb": "assets/cards/thumb/oozora-subaru-r5-c002.webp",
    "full": "assets/cards/full/oozora-subaru-r5-c002.webp"
  },
  "c0160": {
    "thin": "assets/cards/portrait/azki-r5-c001.webp",
    "thumb": "assets/cards/thumb/azki-r5-c001.webp",
    "full": "assets/cards/full/azki-r5-c001.webp"
  },
  "c0052": {
    "thin": "assets/cards/portrait/ookami-mio-r5-c001.webp",
    "thumb": "assets/cards/thumb/ookami-mio-r5-c001.webp",
    "full": "assets/cards/full/ookami-mio-r5-c001.webp"
  },
  "c0127": {
    "thin": "assets/cards/portrait/ookami-mio-r5-c002.webp",
    "thumb": "assets/cards/thumb/ookami-mio-r5-c002.webp",
    "full": "assets/cards/full/ookami-mio-r5-c002.webp"
  },
  "c0166": {
    "thin": "assets/cards/portrait/sakura-miko-r5-c001.webp",
    "thumb": "assets/cards/thumb/sakura-miko-r5-c001.webp",
    "full": "assets/cards/full/sakura-miko-r5-c001.webp"
  },
  "c0138": {
    "thin": "assets/cards/portrait/sakura-miko-r5-c002.webp",
    "thumb": "assets/cards/thumb/sakura-miko-r5-c002.webp",
    "full": "assets/cards/full/sakura-miko-r5-c002.webp"
  },
  "c0171": {
    "thin": "assets/cards/portrait/nekomata-okayu-r5-c001.webp",
    "thumb": "assets/cards/thumb/nekomata-okayu-r5-c001.webp",
    "full": "assets/cards/full/nekomata-okayu-r5-c001.webp"
  },
  "c0050": {
    "thin": "assets/cards/portrait/nekomata-okayu-r5-c002.webp",
    "thumb": "assets/cards/thumb/nekomata-okayu-r5-c002.webp",
    "full": "assets/cards/full/nekomata-okayu-r5-c002.webp"
  },
  "c0175": {
    "thin": "assets/cards/portrait/inugami-korone-r5-c001.webp",
    "thumb": "assets/cards/thumb/inugami-korone-r5-c001.webp",
    "full": "assets/cards/full/inugami-korone-r5-c001.webp"
  },
  "c0089": {
    "thin": "assets/cards/portrait/inugami-korone-r5-c002.webp",
    "thumb": "assets/cards/thumb/inugami-korone-r5-c002.webp",
    "full": "assets/cards/full/inugami-korone-r5-c002.webp"
  },
  "c0110": {
    "thin": "assets/cards/portrait/hoshimachi-suisei-r5-c001.webp",
    "thumb": "assets/cards/thumb/hoshimachi-suisei-r5-c001.webp",
    "full": "assets/cards/full/hoshimachi-suisei-r5-c001.webp"
  },
  "c0039": {
    "thin": "assets/cards/portrait/hoshimachi-suisei-r5-c002.webp",
    "thumb": "assets/cards/thumb/hoshimachi-suisei-r5-c002.webp",
    "full": "assets/cards/full/hoshimachi-suisei-r5-c002.webp"
  },
  "c0121": {
    "thin": "assets/cards/portrait/usada-pekora-r5-c001.webp",
    "thumb": "assets/cards/thumb/usada-pekora-r5-c001.webp",
    "full": "assets/cards/full/usada-pekora-r5-c001.webp"
  },
  "c0163": {
    "thin": "assets/cards/portrait/shiranui-flare-r5-c001.webp",
    "thumb": "assets/cards/thumb/shiranui-flare-r5-c001.webp",
    "full": "assets/cards/full/shiranui-flare-r5-c001.webp"
  },
  "c0019": {
    "thin": "assets/cards/portrait/shiranui-flare-r5-c002.webp",
    "thumb": "assets/cards/thumb/shiranui-flare-r5-c002.webp",
    "full": "assets/cards/full/shiranui-flare-r5-c002.webp"
  },
  "c0153": {
    "thin": "assets/cards/portrait/shirogane-noel-r5-c001.webp",
    "thumb": "assets/cards/thumb/shirogane-noel-r5-c001.webp",
    "full": "assets/cards/full/shirogane-noel-r5-c001.webp"
  },
  "c0083": {
    "thin": "assets/cards/portrait/shirogane-noel-r5-c002.webp",
    "thumb": "assets/cards/thumb/shirogane-noel-r5-c002.webp",
    "full": "assets/cards/full/shirogane-noel-r5-c002.webp"
  },
  "c0165": {
    "thin": "assets/cards/portrait/houshou-marine-r5-c001.webp",
    "thumb": "assets/cards/thumb/houshou-marine-r5-c001.webp",
    "full": "assets/cards/full/houshou-marine-r5-c001.webp"
  },
  "c0198": {
    "thin": "assets/cards/portrait/houshou-marine-r5-c002.webp",
    "thumb": "assets/cards/thumb/houshou-marine-r5-c002.webp",
    "full": "assets/cards/full/houshou-marine-r5-c002.webp"
  },
  "c0088": {
    "thin": "assets/cards/portrait/tsunomaki-watame-r5-c001.webp",
    "thumb": "assets/cards/thumb/tsunomaki-watame-r5-c001.webp",
    "full": "assets/cards/full/tsunomaki-watame-r5-c001.webp"
  },
  "c0041": {
    "thin": "assets/cards/portrait/tsunomaki-watame-r5-c002.webp",
    "thumb": "assets/cards/thumb/tsunomaki-watame-r5-c002.webp",
    "full": "assets/cards/full/tsunomaki-watame-r5-c002.webp"
  },
  "c0161": {
    "thin": "assets/cards/portrait/tokoyami-towa-r5-c001.webp",
    "thumb": "assets/cards/thumb/tokoyami-towa-r5-c001.webp",
    "full": "assets/cards/full/tokoyami-towa-r5-c001.webp"
  },
  "c0147": {
    "thin": "assets/cards/portrait/himemori-luna-r5-c001.webp",
    "thumb": "assets/cards/thumb/himemori-luna-r5-c001.webp",
    "full": "assets/cards/full/himemori-luna-r5-c001.webp"
  },
  "c0150": {
    "thin": "assets/cards/portrait/himemori-luna-r5-c002.webp",
    "thumb": "assets/cards/thumb/himemori-luna-r5-c002.webp",
    "full": "assets/cards/full/himemori-luna-r5-c002.webp"
  },
  "c0045": {
    "thin": "assets/cards/portrait/yukihana-lamy-r5-c001.webp",
    "thumb": "assets/cards/thumb/yukihana-lamy-r5-c001.webp",
    "full": "assets/cards/full/yukihana-lamy-r5-c001.webp"
  },
  "c0034": {
    "thin": "assets/cards/portrait/yukihana-lamy-r5-c002.webp",
    "thumb": "assets/cards/thumb/yukihana-lamy-r5-c002.webp",
    "full": "assets/cards/full/yukihana-lamy-r5-c002.webp"
  },
  "c0002": {
    "thin": "assets/cards/portrait/momosuzu-nene-r5-c001.webp",
    "thumb": "assets/cards/thumb/momosuzu-nene-r5-c001.webp",
    "full": "assets/cards/full/momosuzu-nene-r5-c001.webp"
  },
  "c0188": {
    "thin": "assets/cards/portrait/shishiro-botan-r5-c001.webp",
    "thumb": "assets/cards/thumb/shishiro-botan-r5-c001.webp",
    "full": "assets/cards/full/shishiro-botan-r5-c001.webp"
  },
  "c0092": {
    "thin": "assets/cards/portrait/omaru-polka-r5-c001.webp",
    "thumb": "assets/cards/thumb/omaru-polka-r5-c001.webp",
    "full": "assets/cards/full/omaru-polka-r5-c001.webp"
  },
  "c0009": {
    "thin": "assets/cards/portrait/omaru-polka-r5-c002.webp",
    "thumb": "assets/cards/thumb/omaru-polka-r5-c002.webp",
    "full": "assets/cards/full/omaru-polka-r5-c002.webp"
  },
  "c0007": {
    "thin": "assets/cards/portrait/laplus-darknesss-r5-c001.webp",
    "thumb": "assets/cards/thumb/laplus-darknesss-r5-c001.webp",
    "full": "assets/cards/full/laplus-darknesss-r5-c001.webp"
  },
  "c0006": {
    "thin": "assets/cards/portrait/laplus-darknesss-r5-c002.webp",
    "thumb": "assets/cards/thumb/laplus-darknesss-r5-c002.webp",
    "full": "assets/cards/full/laplus-darknesss-r5-c002.webp"
  },
  "c0151": {
    "thin": "assets/cards/portrait/takane-lui-r5-c001.webp",
    "thumb": "assets/cards/thumb/takane-lui-r5-c001.webp",
    "full": "assets/cards/full/takane-lui-r5-c001.webp"
  },
  "c0095": {
    "thin": "assets/cards/portrait/takane-lui-r5-c002.webp",
    "thumb": "assets/cards/thumb/takane-lui-r5-c002.webp",
    "full": "assets/cards/full/takane-lui-r5-c002.webp"
  },
  "c0131": {
    "thin": "assets/cards/portrait/hakui-koyori-r5-c001.webp",
    "thumb": "assets/cards/thumb/hakui-koyori-r5-c001.webp",
    "full": "assets/cards/full/hakui-koyori-r5-c001.webp"
  },
  "c0079": {
    "thin": "assets/cards/portrait/hakui-koyori-r5-c002.webp",
    "thumb": "assets/cards/thumb/hakui-koyori-r5-c002.webp",
    "full": "assets/cards/full/hakui-koyori-r5-c002.webp"
  },
  "c0020": {
    "thin": "assets/cards/portrait/kazama-iroha-r5-c001.webp",
    "thumb": "assets/cards/thumb/kazama-iroha-r5-c001.webp",
    "full": "assets/cards/full/kazama-iroha-r5-c001.webp"
  },
  "c0053": {
    "thin": "assets/cards/portrait/ayunda-risu-r5-c001.webp",
    "thumb": "assets/cards/thumb/ayunda-risu-r5-c001.webp",
    "full": "assets/cards/full/ayunda-risu-r5-c001.webp"
  },
  "c0139": {
    "thin": "assets/cards/portrait/moona-hoshinova-r5-c001.webp",
    "thumb": "assets/cards/thumb/moona-hoshinova-r5-c001.webp",
    "full": "assets/cards/full/moona-hoshinova-r5-c001.webp"
  },
  "c0133": {
    "thin": "assets/cards/portrait/airani-iofifteen-r5-c001.webp",
    "thumb": "assets/cards/thumb/airani-iofifteen-r5-c001.webp",
    "full": "assets/cards/full/airani-iofifteen-r5-c001.webp"
  },
  "c0003": {
    "thin": "assets/cards/portrait/kureiji-ollie-r5-c001.webp",
    "thumb": "assets/cards/thumb/kureiji-ollie-r5-c001.webp",
    "full": "assets/cards/full/kureiji-ollie-r5-c001.webp"
  },
  "c0186": {
    "thin": "assets/cards/portrait/kureiji-ollie-r5-c002.webp",
    "thumb": "assets/cards/thumb/kureiji-ollie-r5-c002.webp",
    "full": "assets/cards/full/kureiji-ollie-r5-c002.webp"
  },
  "c0199": {
    "thin": "assets/cards/portrait/anya-melfissa-r5-c001.webp",
    "thumb": "assets/cards/thumb/anya-melfissa-r5-c001.webp",
    "full": "assets/cards/full/anya-melfissa-r5-c001.webp"
  },
  "c0182": {
    "thin": "assets/cards/portrait/anya-melfissa-r5-c002.webp",
    "thumb": "assets/cards/thumb/anya-melfissa-r5-c002.webp",
    "full": "assets/cards/full/anya-melfissa-r5-c002.webp"
  },
  "c0154": {
    "thin": "assets/cards/portrait/pavolia-reine-r5-c001.webp",
    "thumb": "assets/cards/thumb/pavolia-reine-r5-c001.webp",
    "full": "assets/cards/full/pavolia-reine-r5-c001.webp"
  },
  "c0098": {
    "thin": "assets/cards/portrait/vestia-zeta-r5-c001.webp",
    "thumb": "assets/cards/thumb/vestia-zeta-r5-c001.webp",
    "full": "assets/cards/full/vestia-zeta-r5-c001.webp"
  },
  "c0193": {
    "thin": "assets/cards/portrait/kaela-kovalskia-r5-c001.webp",
    "thumb": "assets/cards/thumb/kaela-kovalskia-r5-c001.webp",
    "full": "assets/cards/full/kaela-kovalskia-r5-c001.webp"
  },
  "c0149": {
    "thin": "assets/cards/portrait/kobo-kanaeru-r5-c001.webp",
    "thumb": "assets/cards/thumb/kobo-kanaeru-r5-c001.webp",
    "full": "assets/cards/full/kobo-kanaeru-r5-c001.webp"
  },
  "c0118": {
    "thin": "assets/cards/portrait/kobo-kanaeru-r5-c002.webp",
    "thumb": "assets/cards/thumb/kobo-kanaeru-r5-c002.webp",
    "full": "assets/cards/full/kobo-kanaeru-r5-c002.webp"
  },
  "c0113": {
    "thin": "assets/cards/portrait/mori-calliope-r5-c001.webp",
    "thumb": "assets/cards/thumb/mori-calliope-r5-c001.webp",
    "full": "assets/cards/full/mori-calliope-r5-c001.webp"
  },
  "c0087": {
    "thin": "assets/cards/portrait/mori-calliope-r5-c002.webp",
    "thumb": "assets/cards/thumb/mori-calliope-r5-c002.webp",
    "full": "assets/cards/full/mori-calliope-r5-c002.webp"
  },
  "c0125": {
    "thin": "assets/cards/portrait/takanashi-kiara-r5-c001.webp",
    "thumb": "assets/cards/thumb/takanashi-kiara-r5-c001.webp",
    "full": "assets/cards/full/takanashi-kiara-r5-c001.webp"
  },
  "c0022": {
    "thin": "assets/cards/portrait/ninomae-inanis-r5-c001.webp",
    "thumb": "assets/cards/thumb/ninomae-inanis-r5-c001.webp",
    "full": "assets/cards/full/ninomae-inanis-r5-c001.webp"
  },
  "c0062": {
    "thin": "assets/cards/portrait/ninomae-inanis-r5-c002.webp",
    "thumb": "assets/cards/thumb/ninomae-inanis-r5-c002.webp",
    "full": "assets/cards/full/ninomae-inanis-r5-c002.webp"
  },
  "c0001": {
    "thin": "assets/cards/portrait/irys-r5-c001.webp",
    "thumb": "assets/cards/thumb/irys-r5-c001.webp",
    "full": "assets/cards/full/irys-r5-c001.webp"
  },
  "c0103": {
    "thin": "assets/cards/portrait/ouro-kronii-r5-c001.webp",
    "thumb": "assets/cards/thumb/ouro-kronii-r5-c001.webp",
    "full": "assets/cards/full/ouro-kronii-r5-c001.webp"
  },
  "c0107": {
    "thin": "assets/cards/portrait/hakos-baelz-r5-c001.webp",
    "thumb": "assets/cards/thumb/hakos-baelz-r5-c001.webp",
    "full": "assets/cards/full/hakos-baelz-r5-c001.webp"
  },
  "c0192": {
    "thin": "assets/cards/portrait/hakos-baelz-r5-c002.webp",
    "thumb": "assets/cards/thumb/hakos-baelz-r5-c002.webp",
    "full": "assets/cards/full/hakos-baelz-r5-c002.webp"
  },
  "c0060": {
    "thin": "assets/cards/portrait/shiori-novella-r5-c001.webp",
    "thumb": "assets/cards/thumb/shiori-novella-r5-c001.webp",
    "full": "assets/cards/full/shiori-novella-r5-c001.webp"
  },
  "c0158": {
    "thin": "assets/cards/portrait/shiori-novella-r5-c002.webp",
    "thumb": "assets/cards/thumb/shiori-novella-r5-c002.webp",
    "full": "assets/cards/full/shiori-novella-r5-c002.webp"
  },
  "c0040": {
    "thin": "assets/cards/portrait/koseki-bijou-r5-c001.webp",
    "thumb": "assets/cards/thumb/koseki-bijou-r5-c001.webp",
    "full": "assets/cards/full/koseki-bijou-r5-c001.webp"
  },
  "c0112": {
    "thin": "assets/cards/portrait/nerissa-ravencroft-r5-c001.webp",
    "thumb": "assets/cards/thumb/nerissa-ravencroft-r5-c001.webp",
    "full": "assets/cards/full/nerissa-ravencroft-r5-c001.webp"
  },
  "c0116": {
    "thin": "assets/cards/portrait/fuwawa-abyssgard-r5-c001.webp",
    "thumb": "assets/cards/thumb/fuwawa-abyssgard-r5-c001.webp",
    "full": "assets/cards/full/fuwawa-abyssgard-r5-c001.webp"
  },
  "c0134": {
    "thin": "assets/cards/portrait/fuwawa-abyssgard-r5-c002.webp",
    "thumb": "assets/cards/thumb/fuwawa-abyssgard-r5-c002.webp",
    "full": "assets/cards/full/fuwawa-abyssgard-r5-c002.webp"
  },
  "c0189": {
    "thin": "assets/cards/portrait/mococo-abyssgard-r5-c001.webp",
    "thumb": "assets/cards/thumb/mococo-abyssgard-r5-c001.webp",
    "full": "assets/cards/full/mococo-abyssgard-r5-c001.webp"
  },
  "c0155": {
    "thin": "assets/cards/portrait/mococo-abyssgard-r5-c002.webp",
    "thumb": "assets/cards/thumb/mococo-abyssgard-r5-c002.webp",
    "full": "assets/cards/full/mococo-abyssgard-r5-c002.webp"
  },
  "c0201": {
    "thin": "assets/cards/portrait/otonose-kanade-r5-c001.webp",
    "thumb": "assets/cards/thumb/otonose-kanade-r5-c001.webp",
    "full": "assets/cards/full/otonose-kanade-r5-c001.webp"
  },
  "c0183": {
    "thin": "assets/cards/portrait/otonose-kanade-r5-c002.webp",
    "thumb": "assets/cards/thumb/otonose-kanade-r5-c002.webp",
    "full": "assets/cards/full/otonose-kanade-r5-c002.webp"
  },
  "c0145": {
    "thin": "assets/cards/portrait/ichijou-ririka-r5-c001.webp",
    "thumb": "assets/cards/thumb/ichijou-ririka-r5-c001.webp",
    "full": "assets/cards/full/ichijou-ririka-r5-c001.webp"
  },
  "c0010": {
    "thin": "assets/cards/portrait/ichijou-ririka-r5-c002.webp",
    "thumb": "assets/cards/thumb/ichijou-ririka-r5-c002.webp",
    "full": "assets/cards/full/ichijou-ririka-r5-c002.webp"
  },
  "c0055": {
    "thin": "assets/cards/portrait/juufuutei-raden-r5-c001.webp",
    "thumb": "assets/cards/thumb/juufuutei-raden-r5-c001.webp",
    "full": "assets/cards/full/juufuutei-raden-r5-c001.webp"
  },
  "c0126": {
    "thin": "assets/cards/portrait/todoroki-hajime-r5-c001.webp",
    "thumb": "assets/cards/thumb/todoroki-hajime-r5-c001.webp",
    "full": "assets/cards/full/todoroki-hajime-r5-c001.webp"
  },
  "c0090": {
    "thin": "assets/cards/portrait/natsuiro-matsuri-r5-c002.webp",
    "thumb": "assets/cards/thumb/natsuiro-matsuri-r5-c002.webp",
    "full": "assets/cards/full/natsuiro-matsuri-r5-c002.webp"
  },
  "c0023": {
    "thin": "assets/cards/portrait/tokoyami-towa-r5-c002.webp",
    "thumb": "assets/cards/thumb/tokoyami-towa-r5-c002.webp",
    "full": "assets/cards/full/tokoyami-towa-r5-c002.webp"
  },
  "c0059": {
    "thin": "assets/cards/portrait/shishiro-botan-r5-c002.webp",
    "thumb": "assets/cards/thumb/shishiro-botan-r5-c002.webp",
    "full": "assets/cards/full/shishiro-botan-r5-c002.webp"
  },
  "c0099": {
    "thin": "assets/cards/portrait/vestia-zeta-r5-c002.webp",
    "thumb": "assets/cards/thumb/vestia-zeta-r5-c002.webp",
    "full": "assets/cards/full/vestia-zeta-r5-c002.webp"
  },
  "c0051": {
    "thin": "assets/cards/portrait/kaela-kovalskia-r5-c002.webp",
    "thumb": "assets/cards/thumb/kaela-kovalskia-r5-c002.webp",
    "full": "assets/cards/full/kaela-kovalskia-r5-c002.webp"
  },
  "c0044": {
    "thin": "assets/cards/portrait/koseki-bijou-r5-c002.webp",
    "thumb": "assets/cards/thumb/koseki-bijou-r5-c002.webp",
    "full": "assets/cards/full/koseki-bijou-r5-c002.webp"
  },
  "c0115": {
    "thin": "assets/cards/portrait/nerissa-ravencroft-r5-c002.webp",
    "thumb": "assets/cards/thumb/nerissa-ravencroft-r5-c002.webp",
    "full": "assets/cards/full/nerissa-ravencroft-r5-c002.webp"
  },
  "c0008": {
    "thin": "assets/cards/portrait/juufuutei-raden-r5-c002.webp",
    "thumb": "assets/cards/thumb/juufuutei-raden-r5-c002.webp",
    "full": "assets/cards/full/juufuutei-raden-r5-c002.webp"
  },
  "c0148": {
    "thin": "assets/cards/portrait/todoroki-hajime-r5-c002.webp",
    "thumb": "assets/cards/thumb/todoroki-hajime-r5-c002.webp",
    "full": "assets/cards/full/todoroki-hajime-r5-c002.webp"
  }
};
  function candidates(cardId){
    const entry=images[cardId];
    return entry ? ['thin','thumb','full'].filter(kind=>entry[kind]).map(kind=>({kind,url:imageUrl(entry[kind])})) : [];
  }
  return {candidates};
})();
