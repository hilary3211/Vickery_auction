'reach 0.1';

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    NFTId : Token,
    minbid : UInt,
    getwinneradd : Fun([], Address),
    getsecondbid : Fun([], UInt)
  });
  const Bidder1 = Participant('Bidder1', {
    bid : UInt,
    accepttok : Fun([Token],Null)
  });
  const Bidder2 = Participant('Bidder2', {
    bid : UInt,
    accepttok : Fun([Token],Null)
  });
  const Bidder3 = Participant('Bidder3', {
    bid : UInt,
    accepttok : Fun([Token],Null)
  });
  const Bidder4 = Participant('Bidder4', {
    bid : UInt,
    accepttok : Fun([Token],Null)
  });
  const Bidder5 = Participant('Bidder5', {
    bid : UInt,
    accepttok : Fun([Token],Null)
  });
  init();
  Alice.only(() => {
    const NftId = declassify(interact.NFTId)
    const MinBid = declassify(interact.minbid)
  })
  Alice.publish(NftId,MinBid)
  commit()
  Bidder1.only(() => {
    const bid1 = declassify(interact.bid)
    const act = declassify(interact.accepttok(NftId))
  })
  Bidder1.publish(bid1,act)
  commit()
  Bidder2.only(() => {
    const bid2 = declassify(interact.bid)
    const act1 = declassify(interact.accepttok(NftId))
  })
  Bidder2.publish(bid2,act1)
  commit()
  Bidder3.only(() => {
    const bid3= declassify(interact.bid)
    const act2 = declassify(interact.accepttok(NftId))
  })
  Bidder3.publish(bid3,act2)
  commit()
  Bidder4.only(() => {
    const bid4 = declassify(interact.bid)
    const act3 = declassify(interact.accepttok(NftId))
  })
  Bidder4.publish(bid4,act3)
  commit()
  Bidder5.only(() => {
    const bid5 = declassify(interact.bid)
    const act4 = declassify(interact.accepttok(NftId))
  })
  Bidder5.publish(bid5,act4)
  commit()
  Alice.only(() => {
    const Winneradd= declassify(interact.getwinneradd())
    const Secondbid = declassify(interact.getsecondbid())
  })
  Alice.publish(Winneradd, Secondbid)
  if (Winneradd == Bidder1){
    commit()
    Bidder1.pay(Secondbid)
    commit()
    Alice.pay([[1,NftId]])
    transfer([[1,NftId]]).to(Bidder1)
    transfer(balance()).to(Alice)
  }else{
    if (Winneradd == Bidder2){
        commit()
        Bidder2.pay(Secondbid)
        commit()
        Alice.pay([[1,NftId]])
        transfer([[1,NftId]]).to(Bidder2)
        transfer(balance()).to(Alice)
    }else{
        if (Winneradd == Bidder3){
            commit()
            Bidder3.pay(Secondbid)
            commit()
            Alice.pay([[1,NftId]])
            transfer([[1,NftId]]).to(Bidder3)
            transfer(balance()).to(Alice)

        }else{
            if (Winneradd == Bidder4){
                commit()
                Bidder4.pay(Secondbid)
                commit()
                Alice.pay([[1,NftId]])
                transfer([[1,NftId]]).to(Bidder4)
                transfer(balance()).to(Alice)
            }else{
                if (Winneradd == Bidder5){
                    commit()
                    Bidder5.pay(Secondbid)
                    commit()
                    Alice.pay([[1,NftId]])
                    transfer([[1,NftId]]).to(Bidder5)
                    transfer(balance()).to(Alice)
                }
            }
        }
    }
  }
  commit()
  exit()
});
