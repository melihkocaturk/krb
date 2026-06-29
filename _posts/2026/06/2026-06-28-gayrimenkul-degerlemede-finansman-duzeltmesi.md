---
layout: post
title: "Gayrimenkul Değerlemede Finansman Düzeltmesi"
description: "Gayrimenkul değerlemede en kritik hatalardan biri, emsal satışların “göründüğü fiyat” üzerinden doğrudan karşılaştırma yapılmasıdır. Özellikle vadeli satışlar söz konusu olduğunda, satış fiyatı gerçek piyasa değerini yansıtmaz."
tags: ["gayrimenkul değerleme"]
---

Gayrimenkul değerlemede en kritik hatalardan biri, emsal satışların “göründüğü fiyat” üzerinden doğrudan karşılaştırma yapılmasıdır. Özellikle vadeli satışlar, peşin satışlar ve karma ödeme yapıları (bir kısmı peşin, bir kısmı vadeli) söz konusu olduğunda, satış fiyatı gerçek piyasa değerini yansıtmaz.

Bu noktada devreye **finansman düzeltmesi (financing adjustment)** girer. Bu düzeltme, vadeli satışın içindeki “zaman değeri” etkisini ortadan kaldırarak, satış fiyatını **peşin (spot) değere** indirger.

## Finansman Düzeltmesi Nedir?

Finansman düzeltmesi, bir gayrimenkulün satış fiyatında yer alan:

- Vade farkı  
- Taksitli ödeme avantajı  
- Ertelenmiş ödeme nedeniyle oluşan faiz etkisi  

gibi unsurları elimine ederek, fiyatı **nakit karşılığına (cash equivalent value)** dönüştürme işlemidir.

Değerleme mantığında şu temel kabul vardır:

> Aynı gayrimenkul, peşin satıldığında ve vadeli satıldığında farklı fiyatlara sahip olabilir. Ancak gerçek piyasa değeri, peşin karşılık değeridir.

## Neden Finansman Düzeltmesi Yapılır?

Eğer finansman etkisi düzeltilmezse:

- Vadeli satışlar olduğundan yüksek görünür
- Piyasa değeri olduğundan fazla tahmin edilir
- Emsal karşılaştırmaları bozulur
- Değerleme raporunun güvenilirliği düşer

Özellikle Türkiye gibi vadeli satışların yaygın olduğu piyasalarda bu düzeltme kritik önemdedir.

## Temel Hesap Mantığı

Finansman düzeltmesi aslında basit bir **indirgeme (discounting)** işlemidir:

Bugünkü Değer = Gelecekteki Ödeme / (1 + faiz oranı)^<sup>n</sup>

Burada:

- Faiz oranı: yıllık fırsat maliyeti (örneğin %40)
- n: yıl cinsinden vade
- Gelecekteki ödeme: vadeli alınan tutar

## Örnek Uygulama: Karma Ödemeli Daire Satışı

### Senaryo

Bir daire şu koşullarla satılmış olsun:

- Toplam satış fiyatı: **5.000.000 TL**
- 2.000.000 TL peşin ödenmiş
- 3.000.000 TL ise 1 yıl vadeli
- Yıllık piyasa faiz oranı: **%40**

Bu satış, emsal olarak kullanılmak isteniyor. Ancak önce vadeli kısmı indirgenmeli.

## Adım 1: Peşin Kısmın Değeri

Peşin ödeme zaten bugünkü değerdir:

- Peşin: 2.000.000 TL

## Adım 2: Vadeli Kısmın Bugünkü Değeri

Vadeli ödeme 1 yıl sonra alınacak:

PV = 3.000.000/(1 + 0.40)^<sup>1</sup>

PV = 3.000.000/1.40 = 2.142.857 TL

## Adım 3: Toplam Peşin Eşdeğer Değer

Toplam Bugünkü Değer = 2.000.000 + 2.142.857

= 4.142.857 TL

## Sonuç

- Görünen satış fiyatı: **5.000.000 TL**
- Finansman etkisi düzeltilmiş emsal değeri: **4.142.857 TL**

Aradaki fark:

- **857.143 TL** → tamamen finansman (vade) etkisidir

## Bu Emsal Nasıl Kullanılır?

Değerleme uzmanı bu satış verisini şu şekilde kullanır:

- Ham veri: 5.000.000 TL satış
- Düzeltilmiş veri: 4.142.857 TL (karşılaştırmaya uygun değer)

Böylece farklı ödeme yapısına sahip satışlar aynı zemine çekilmiş olur.

## Daha Gerçekçi Senaryo: Çok Vadeli Ödeme

Eğer ödeme şu şekilde olsaydı:

- 2.000.000 TL peşin
- 1.500.000 TL 6 ay sonra
- 1.500.000 TL 12 ay sonra

Bu durumda her ödeme ayrı ayrı indirgenir:

- 6 ay: 1.5M / (1 + 0.40)^<sup>0.5</sup>
- 12 ay: 1.5M / (1 + 0.40)^<sup>1</sup>

Bu yaklaşım, özellikle proje satışlarında ve inşaat aşamasındaki konutlarda çok önemlidir.

## Finansman Düzeltmesinde Kritik Noktalar

1. **Doğru faiz oranı seçim**: Bankaların kredi faizi değil, **piyasa fırsat maliyeti** esas alınmalıdır.
2. **Risk primi**: Vadeli satışlarda risk daha yüksekse, faiz oranı artırılabilir.
3. **Enflasyon etkisi**: Yüksek enflasyon ortamında nominal değil, reel analiz gerekebilir.
4. **Piyasa standardizasyonu**: Aynı bölgede tüm emsaller aynı oranla düzeltilmelidir.

## Sonuç: Gerçek Değer Zamanı Fiyatından Ayırmak

Finansman düzeltmesi, gayrimenkul değerlemede en “görünmeyen ama en etkili” düzeltmelerden biridir. Çünkü çoğu zaman fiyatı belirleyen şey mülkün kendisi değil, **paranın zamanıdır**.

Vadeli satışları olduğu gibi kullanmak, piyasayı olduğundan daha pahalı veya daha ucuz gösterebilir. Bu nedenle her profesyonel değerleme çalışmasında, emsaller mutlaka **peşin eşdeğer değere çevrilmelidir**.