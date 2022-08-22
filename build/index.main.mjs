// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1, ctc0, ctc0],
      4: [ctc0, ctc1, ctc0, ctc0, ctc0],
      5: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
      6: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
      7: [ctc0, ctc1, ctc0, ctc2],
      8: [ctc0, ctc1, ctc0, ctc2],
      10: [ctc0, ctc1, ctc0, ctc2],
      11: [ctc0, ctc1, ctc0, ctc2],
      13: [ctc0, ctc1, ctc0, ctc2],
      14: [ctc0, ctc1, ctc0, ctc2],
      16: [ctc0, ctc1, ctc0, ctc2],
      17: [ctc0, ctc1, ctc0, ctc2],
      19: [ctc0, ctc1, ctc0, ctc2],
      20: [ctc0, ctc1, ctc0, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v279 = stdlib.protect(ctc0, interact.NFTId, 'for Alice\'s interact field NFTId');
  const v280 = stdlib.protect(ctc1, interact.minbid, 'for Alice\'s interact field minbid');
  
  const txn1 = await (ctc.sendrecv({
    args: [v279, v280],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v289, v290], secs: v292, time: v291, didSend: v34, from: v288 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v289
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v289, v290], secs: v292, time: v291, didSend: v34, from: v288 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v307, v308], secs: v310, time: v309, didSend: v52, from: v306 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v314, v315], secs: v317, time: v316, didSend: v61, from: v313 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v70, from: v320 } = txn5;
  ;
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 5,
    out_tys: [ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v328, v329], secs: v331, time: v330, didSend: v79, from: v327 } = txn6;
  ;
  const v334 = stdlib.protect(ctc3, await interact.getwinneradd(), {
    at: './index.rsh:68:54:application',
    fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:17:function exp)'],
    msg: 'getwinneradd',
    who: 'Alice'
    });
  const v335 = stdlib.protect(ctc1, await interact.getsecondbid(), {
    at: './index.rsh:69:55:application',
    fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:17:function exp)'],
    msg: 'getsecondbid',
    who: 'Alice'
    });
  
  const txn7 = await (ctc.sendrecv({
    args: [v288, v289, v299, v306, v313, v320, v327, v334, v335],
    evt_cnt: 2,
    funcNum: 6,
    lct: v330,
    onlyIf: true,
    out_tys: [ctc3, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v337, v338], secs: v340, time: v339, didSend: v91, from: v336 } = txn7;
      
      ;
      const v342 = stdlib.addressEq(v337, v299);
      if (v342) {
        sim_r.isHalt = false;
        }
      else {
        const v378 = stdlib.addressEq(v337, v306);
        if (v378) {
          sim_r.isHalt = false;
          }
        else {
          const v414 = stdlib.addressEq(v337, v313);
          if (v414) {
            sim_r.isHalt = false;
            }
          else {
            const v450 = stdlib.addressEq(v337, v320);
            if (v450) {
              sim_r.isHalt = false;
              }
            else {
              const v486 = stdlib.addressEq(v337, v327);
              if (v486) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v289
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v91, from: v336 } = txn7;
  ;
  const v341 = stdlib.addressEq(v288, v336);
  stdlib.assert(v341, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v342 = stdlib.addressEq(v337, v299);
  if (v342) {
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v345, time: v344, didSend: v99, from: v343 } = txn8;
    ;
    const v348 = stdlib.addressEq(v299, v343);
    stdlib.assert(v348, {
      at: './index.rsh:74:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn9 = await (ctc.sendrecv({
      args: [v288, v289, v299, v338],
      evt_cnt: 0,
      funcNum: 8,
      lct: v344,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:76:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:76:17:decimal', stdlib.UInt_max, '1'), v289]]],
      sim_p: (async (txn9) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v351, time: v350, didSend: v106, from: v349 } = txn9;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:76:17:decimal', stdlib.UInt_max, '1'),
          kind: 'to',
          tok: v289
          });
        sim_r.txns.push({
          kind: 'from',
          to: v299,
          tok: v289
          });
        sim_r.txns.push({
          kind: 'from',
          to: v288,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v289
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v351, time: v350, didSend: v106, from: v349 } = txn9;
    ;
    ;
    const v358 = stdlib.addressEq(v288, v349);
    stdlib.assert(v358, {
      at: './index.rsh:76:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const v378 = stdlib.addressEq(v337, v306);
    if (v378) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v381, time: v380, didSend: v123, from: v379 } = txn8;
      ;
      const v384 = stdlib.addressEq(v306, v379);
      stdlib.assert(v384, {
        at: './index.rsh:82:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn9 = await (ctc.sendrecv({
        args: [v288, v289, v306, v338],
        evt_cnt: 0,
        funcNum: 10,
        lct: v380,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:84:15:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'), v289]]],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v387, time: v386, didSend: v130, from: v385 } = txn9;
          
          ;
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v289
            });
          sim_r.txns.push({
            kind: 'from',
            to: v306,
            tok: v289
            });
          sim_r.txns.push({
            kind: 'from',
            to: v288,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v289
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v387, time: v386, didSend: v130, from: v385 } = txn9;
      ;
      ;
      const v394 = stdlib.addressEq(v288, v385);
      stdlib.assert(v394, {
        at: './index.rsh:84:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      ;
      return;
      
      
      
      
      }
    else {
      const v414 = stdlib.addressEq(v337, v313);
      if (v414) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 11,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v417, time: v416, didSend: v147, from: v415 } = txn8;
        ;
        const v420 = stdlib.addressEq(v313, v415);
        stdlib.assert(v420, {
          at: './index.rsh:90:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn9 = await (ctc.sendrecv({
          args: [v288, v289, v313, v338],
          evt_cnt: 0,
          funcNum: 12,
          lct: v416,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:92:19:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:92:25:decimal', stdlib.UInt_max, '1'), v289]]],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v423, time: v422, didSend: v154, from: v421 } = txn9;
            
            ;
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:92:25:decimal', stdlib.UInt_max, '1'),
              kind: 'to',
              tok: v289
              });
            sim_r.txns.push({
              kind: 'from',
              to: v313,
              tok: v289
              });
            sim_r.txns.push({
              kind: 'from',
              to: v288,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v289
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v423, time: v422, didSend: v154, from: v421 } = txn9;
        ;
        ;
        const v430 = stdlib.addressEq(v288, v421);
        stdlib.assert(v430, {
          at: './index.rsh:92:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        ;
        return;
        
        
        
        
        }
      else {
        const v450 = stdlib.addressEq(v337, v320);
        if (v450) {
          const txn8 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 13,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v171, from: v451 } = txn8;
          ;
          const v456 = stdlib.addressEq(v320, v451);
          stdlib.assert(v456, {
            at: './index.rsh:99:25:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn9 = await (ctc.sendrecv({
            args: [v288, v289, v320, v338],
            evt_cnt: 0,
            funcNum: 14,
            lct: v452,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:101:23:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:101:29:decimal', stdlib.UInt_max, '1'), v289]]],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v459, time: v458, didSend: v178, from: v457 } = txn9;
              
              ;
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:101:29:decimal', stdlib.UInt_max, '1'),
                kind: 'to',
                tok: v289
                });
              sim_r.txns.push({
                kind: 'from',
                to: v320,
                tok: v289
                });
              sim_r.txns.push({
                kind: 'from',
                to: v288,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v289
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc1],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v459, time: v458, didSend: v178, from: v457 } = txn9;
          ;
          ;
          const v466 = stdlib.addressEq(v288, v457);
          stdlib.assert(v466, {
            at: './index.rsh:101:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          ;
          return;
          
          
          
          
          }
        else {
          const v486 = stdlib.addressEq(v337, v327);
          if (v486) {
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 15,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v489, time: v488, didSend: v195, from: v487 } = txn8;
            ;
            const v492 = stdlib.addressEq(v327, v487);
            stdlib.assert(v492, {
              at: './index.rsh:107:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const txn9 = await (ctc.sendrecv({
              args: [v288, v289, v327, v338],
              evt_cnt: 0,
              funcNum: 16,
              lct: v488,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:109:27:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:109:33:decimal', stdlib.UInt_max, '1'), v289]]],
              sim_p: (async (txn9) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
                
                ;
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:109:33:decimal', stdlib.UInt_max, '1'),
                  kind: 'to',
                  tok: v289
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v327,
                  tok: v289
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v288,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v289
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc3, ctc1],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
            ;
            ;
            const v502 = stdlib.addressEq(v288, v493);
            stdlib.assert(v502, {
              at: './index.rsh:109:27:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            ;
            return;
            
            
            
            
            }
          else {
            return;
            }}}}}
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Bidder1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v281 = stdlib.protect(ctc0, interact.bid, 'for Bidder1\'s interact field bid');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289, v290], secs: v292, time: v291, didSend: v34, from: v288 } = txn1;
  ;
  ;
  stdlib.protect(ctc2, await interact.accepttok(v289), {
    at: './index.rsh:39:46:application',
    fs: ['at ./index.rsh:37:15:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'accepttok',
    who: 'Bidder1'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v288, v289, v281, null],
    evt_cnt: 2,
    funcNum: 1,
    lct: v291,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v307, v308], secs: v310, time: v309, didSend: v52, from: v306 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v314, v315], secs: v317, time: v316, didSend: v61, from: v313 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v70, from: v320 } = txn5;
  ;
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 5,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v328, v329], secs: v331, time: v330, didSend: v79, from: v327 } = txn6;
  ;
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 6,
    out_tys: [ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v91, from: v336 } = txn7;
  ;
  const v341 = stdlib.addressEq(v288, v336);
  stdlib.assert(v341, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bidder1'
    });
  const v342 = stdlib.addressEq(v337, v299);
  if (v342) {
    const txn8 = await (ctc.sendrecv({
      args: [v288, v289, v299, v338],
      evt_cnt: 0,
      funcNum: 7,
      lct: v339,
      onlyIf: true,
      out_tys: [],
      pay: [v338, []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v345, time: v344, didSend: v99, from: v343 } = txn8;
        
        sim_r.txns.push({
          amt: v338,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc1, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v345, time: v344, didSend: v99, from: v343 } = txn8;
    ;
    const v348 = stdlib.addressEq(v299, v343);
    stdlib.assert(v348, {
      at: './index.rsh:74:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder1'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v351, time: v350, didSend: v106, from: v349 } = txn9;
    ;
    ;
    const v358 = stdlib.addressEq(v288, v349);
    stdlib.assert(v358, {
      at: './index.rsh:76:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder1'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const v378 = stdlib.addressEq(v337, v306);
    if (v378) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v381, time: v380, didSend: v123, from: v379 } = txn8;
      ;
      const v384 = stdlib.addressEq(v306, v379);
      stdlib.assert(v384, {
        at: './index.rsh:82:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder1'
        });
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v387, time: v386, didSend: v130, from: v385 } = txn9;
      ;
      ;
      const v394 = stdlib.addressEq(v288, v385);
      stdlib.assert(v394, {
        at: './index.rsh:84:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder1'
        });
      ;
      ;
      return;
      
      
      
      
      }
    else {
      const v414 = stdlib.addressEq(v337, v313);
      if (v414) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 11,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v417, time: v416, didSend: v147, from: v415 } = txn8;
        ;
        const v420 = stdlib.addressEq(v313, v415);
        stdlib.assert(v420, {
          at: './index.rsh:90:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder1'
          });
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 12,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v423, time: v422, didSend: v154, from: v421 } = txn9;
        ;
        ;
        const v430 = stdlib.addressEq(v288, v421);
        stdlib.assert(v430, {
          at: './index.rsh:92:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder1'
          });
        ;
        ;
        return;
        
        
        
        
        }
      else {
        const v450 = stdlib.addressEq(v337, v320);
        if (v450) {
          const txn8 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 13,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v171, from: v451 } = txn8;
          ;
          const v456 = stdlib.addressEq(v320, v451);
          stdlib.assert(v456, {
            at: './index.rsh:99:25:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder1'
            });
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v459, time: v458, didSend: v178, from: v457 } = txn9;
          ;
          ;
          const v466 = stdlib.addressEq(v288, v457);
          stdlib.assert(v466, {
            at: './index.rsh:101:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder1'
            });
          ;
          ;
          return;
          
          
          
          
          }
        else {
          const v486 = stdlib.addressEq(v337, v327);
          if (v486) {
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 15,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v489, time: v488, didSend: v195, from: v487 } = txn8;
            ;
            const v492 = stdlib.addressEq(v327, v487);
            stdlib.assert(v492, {
              at: './index.rsh:107:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder1'
              });
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 16,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
            ;
            ;
            const v502 = stdlib.addressEq(v288, v493);
            stdlib.assert(v502, {
              at: './index.rsh:109:27:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder1'
              });
            ;
            ;
            return;
            
            
            
            
            }
          else {
            return;
            }}}}}
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Bidder2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v282 = stdlib.protect(ctc0, interact.bid, 'for Bidder2\'s interact field bid');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289, v290], secs: v292, time: v291, didSend: v34, from: v288 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.accepttok(v289), {
    at: './index.rsh:45:47:application',
    fs: ['at ./index.rsh:43:15:application call to [unknown function] (defined at: ./index.rsh:43:19:function exp)'],
    msg: 'accepttok',
    who: 'Bidder2'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v288, v289, v299, v282, null],
    evt_cnt: 2,
    funcNum: 2,
    lct: v302,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v307, v308], secs: v310, time: v309, didSend: v52, from: v306 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc3, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v307, v308], secs: v310, time: v309, didSend: v52, from: v306 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v314, v315], secs: v317, time: v316, didSend: v61, from: v313 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v70, from: v320 } = txn5;
  ;
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 5,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v328, v329], secs: v331, time: v330, didSend: v79, from: v327 } = txn6;
  ;
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 6,
    out_tys: [ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v91, from: v336 } = txn7;
  ;
  const v341 = stdlib.addressEq(v288, v336);
  stdlib.assert(v341, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bidder2'
    });
  const v342 = stdlib.addressEq(v337, v299);
  if (v342) {
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v345, time: v344, didSend: v99, from: v343 } = txn8;
    ;
    const v348 = stdlib.addressEq(v299, v343);
    stdlib.assert(v348, {
      at: './index.rsh:74:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder2'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v351, time: v350, didSend: v106, from: v349 } = txn9;
    ;
    ;
    const v358 = stdlib.addressEq(v288, v349);
    stdlib.assert(v358, {
      at: './index.rsh:76:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder2'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const v378 = stdlib.addressEq(v337, v306);
    if (v378) {
      const txn8 = await (ctc.sendrecv({
        args: [v288, v289, v306, v338],
        evt_cnt: 0,
        funcNum: 9,
        lct: v339,
        onlyIf: true,
        out_tys: [],
        pay: [v338, []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v381, time: v380, didSend: v123, from: v379 } = txn8;
          
          sim_r.txns.push({
            amt: v338,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc1, ctc3, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v381, time: v380, didSend: v123, from: v379 } = txn8;
      ;
      const v384 = stdlib.addressEq(v306, v379);
      stdlib.assert(v384, {
        at: './index.rsh:82:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder2'
        });
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v387, time: v386, didSend: v130, from: v385 } = txn9;
      ;
      ;
      const v394 = stdlib.addressEq(v288, v385);
      stdlib.assert(v394, {
        at: './index.rsh:84:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder2'
        });
      ;
      ;
      return;
      
      
      
      
      }
    else {
      const v414 = stdlib.addressEq(v337, v313);
      if (v414) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 11,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v417, time: v416, didSend: v147, from: v415 } = txn8;
        ;
        const v420 = stdlib.addressEq(v313, v415);
        stdlib.assert(v420, {
          at: './index.rsh:90:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder2'
          });
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 12,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v423, time: v422, didSend: v154, from: v421 } = txn9;
        ;
        ;
        const v430 = stdlib.addressEq(v288, v421);
        stdlib.assert(v430, {
          at: './index.rsh:92:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder2'
          });
        ;
        ;
        return;
        
        
        
        
        }
      else {
        const v450 = stdlib.addressEq(v337, v320);
        if (v450) {
          const txn8 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 13,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v171, from: v451 } = txn8;
          ;
          const v456 = stdlib.addressEq(v320, v451);
          stdlib.assert(v456, {
            at: './index.rsh:99:25:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder2'
            });
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v459, time: v458, didSend: v178, from: v457 } = txn9;
          ;
          ;
          const v466 = stdlib.addressEq(v288, v457);
          stdlib.assert(v466, {
            at: './index.rsh:101:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder2'
            });
          ;
          ;
          return;
          
          
          
          
          }
        else {
          const v486 = stdlib.addressEq(v337, v327);
          if (v486) {
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 15,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v489, time: v488, didSend: v195, from: v487 } = txn8;
            ;
            const v492 = stdlib.addressEq(v327, v487);
            stdlib.assert(v492, {
              at: './index.rsh:107:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder2'
              });
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 16,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
            ;
            ;
            const v502 = stdlib.addressEq(v288, v493);
            stdlib.assert(v502, {
              at: './index.rsh:109:27:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder2'
              });
            ;
            ;
            return;
            
            
            
            
            }
          else {
            return;
            }}}}}
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Bidder3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v283 = stdlib.protect(ctc0, interact.bid, 'for Bidder3\'s interact field bid');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289, v290], secs: v292, time: v291, didSend: v34, from: v288 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v307, v308], secs: v310, time: v309, didSend: v52, from: v306 } = txn3;
  ;
  stdlib.protect(ctc2, await interact.accepttok(v289), {
    at: './index.rsh:51:47:application',
    fs: ['at ./index.rsh:49:15:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)'],
    msg: 'accepttok',
    who: 'Bidder3'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v288, v289, v299, v306, v283, null],
    evt_cnt: 2,
    funcNum: 3,
    lct: v309,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v314, v315], secs: v317, time: v316, didSend: v61, from: v313 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc3, ctc3, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v314, v315], secs: v317, time: v316, didSend: v61, from: v313 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v70, from: v320 } = txn5;
  ;
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 5,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v328, v329], secs: v331, time: v330, didSend: v79, from: v327 } = txn6;
  ;
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 6,
    out_tys: [ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v91, from: v336 } = txn7;
  ;
  const v341 = stdlib.addressEq(v288, v336);
  stdlib.assert(v341, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bidder3'
    });
  const v342 = stdlib.addressEq(v337, v299);
  if (v342) {
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v345, time: v344, didSend: v99, from: v343 } = txn8;
    ;
    const v348 = stdlib.addressEq(v299, v343);
    stdlib.assert(v348, {
      at: './index.rsh:74:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder3'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v351, time: v350, didSend: v106, from: v349 } = txn9;
    ;
    ;
    const v358 = stdlib.addressEq(v288, v349);
    stdlib.assert(v358, {
      at: './index.rsh:76:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder3'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const v378 = stdlib.addressEq(v337, v306);
    if (v378) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v381, time: v380, didSend: v123, from: v379 } = txn8;
      ;
      const v384 = stdlib.addressEq(v306, v379);
      stdlib.assert(v384, {
        at: './index.rsh:82:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder3'
        });
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v387, time: v386, didSend: v130, from: v385 } = txn9;
      ;
      ;
      const v394 = stdlib.addressEq(v288, v385);
      stdlib.assert(v394, {
        at: './index.rsh:84:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder3'
        });
      ;
      ;
      return;
      
      
      
      
      }
    else {
      const v414 = stdlib.addressEq(v337, v313);
      if (v414) {
        const txn8 = await (ctc.sendrecv({
          args: [v288, v289, v313, v338],
          evt_cnt: 0,
          funcNum: 11,
          lct: v339,
          onlyIf: true,
          out_tys: [],
          pay: [v338, []],
          sim_p: (async (txn8) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v417, time: v416, didSend: v147, from: v415 } = txn8;
            
            sim_r.txns.push({
              amt: v338,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc1, ctc3, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v417, time: v416, didSend: v147, from: v415 } = txn8;
        ;
        const v420 = stdlib.addressEq(v313, v415);
        stdlib.assert(v420, {
          at: './index.rsh:90:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder3'
          });
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 12,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v423, time: v422, didSend: v154, from: v421 } = txn9;
        ;
        ;
        const v430 = stdlib.addressEq(v288, v421);
        stdlib.assert(v430, {
          at: './index.rsh:92:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder3'
          });
        ;
        ;
        return;
        
        
        
        
        }
      else {
        const v450 = stdlib.addressEq(v337, v320);
        if (v450) {
          const txn8 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 13,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v171, from: v451 } = txn8;
          ;
          const v456 = stdlib.addressEq(v320, v451);
          stdlib.assert(v456, {
            at: './index.rsh:99:25:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder3'
            });
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v459, time: v458, didSend: v178, from: v457 } = txn9;
          ;
          ;
          const v466 = stdlib.addressEq(v288, v457);
          stdlib.assert(v466, {
            at: './index.rsh:101:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder3'
            });
          ;
          ;
          return;
          
          
          
          
          }
        else {
          const v486 = stdlib.addressEq(v337, v327);
          if (v486) {
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 15,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v489, time: v488, didSend: v195, from: v487 } = txn8;
            ;
            const v492 = stdlib.addressEq(v327, v487);
            stdlib.assert(v492, {
              at: './index.rsh:107:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder3'
              });
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 16,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
            ;
            ;
            const v502 = stdlib.addressEq(v288, v493);
            stdlib.assert(v502, {
              at: './index.rsh:109:27:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder3'
              });
            ;
            ;
            return;
            
            
            
            
            }
          else {
            return;
            }}}}}
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Bidder4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v284 = stdlib.protect(ctc0, interact.bid, 'for Bidder4\'s interact field bid');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289, v290], secs: v292, time: v291, didSend: v34, from: v288 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v307, v308], secs: v310, time: v309, didSend: v52, from: v306 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v314, v315], secs: v317, time: v316, didSend: v61, from: v313 } = txn4;
  ;
  stdlib.protect(ctc2, await interact.accepttok(v289), {
    at: './index.rsh:57:47:application',
    fs: ['at ./index.rsh:55:15:application call to [unknown function] (defined at: ./index.rsh:55:19:function exp)'],
    msg: 'accepttok',
    who: 'Bidder4'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v288, v289, v299, v306, v313, v284, null],
    evt_cnt: 2,
    funcNum: 4,
    lct: v316,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v321, v322], secs: v324, time: v323, didSend: v70, from: v320 } = txn5;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc3, ctc3, ctc3, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v70, from: v320 } = txn5;
  ;
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 5,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v328, v329], secs: v331, time: v330, didSend: v79, from: v327 } = txn6;
  ;
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 6,
    out_tys: [ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v91, from: v336 } = txn7;
  ;
  const v341 = stdlib.addressEq(v288, v336);
  stdlib.assert(v341, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bidder4'
    });
  const v342 = stdlib.addressEq(v337, v299);
  if (v342) {
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v345, time: v344, didSend: v99, from: v343 } = txn8;
    ;
    const v348 = stdlib.addressEq(v299, v343);
    stdlib.assert(v348, {
      at: './index.rsh:74:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder4'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v351, time: v350, didSend: v106, from: v349 } = txn9;
    ;
    ;
    const v358 = stdlib.addressEq(v288, v349);
    stdlib.assert(v358, {
      at: './index.rsh:76:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder4'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const v378 = stdlib.addressEq(v337, v306);
    if (v378) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v381, time: v380, didSend: v123, from: v379 } = txn8;
      ;
      const v384 = stdlib.addressEq(v306, v379);
      stdlib.assert(v384, {
        at: './index.rsh:82:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder4'
        });
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v387, time: v386, didSend: v130, from: v385 } = txn9;
      ;
      ;
      const v394 = stdlib.addressEq(v288, v385);
      stdlib.assert(v394, {
        at: './index.rsh:84:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder4'
        });
      ;
      ;
      return;
      
      
      
      
      }
    else {
      const v414 = stdlib.addressEq(v337, v313);
      if (v414) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 11,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v417, time: v416, didSend: v147, from: v415 } = txn8;
        ;
        const v420 = stdlib.addressEq(v313, v415);
        stdlib.assert(v420, {
          at: './index.rsh:90:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder4'
          });
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 12,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v423, time: v422, didSend: v154, from: v421 } = txn9;
        ;
        ;
        const v430 = stdlib.addressEq(v288, v421);
        stdlib.assert(v430, {
          at: './index.rsh:92:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder4'
          });
        ;
        ;
        return;
        
        
        
        
        }
      else {
        const v450 = stdlib.addressEq(v337, v320);
        if (v450) {
          const txn8 = await (ctc.sendrecv({
            args: [v288, v289, v320, v338],
            evt_cnt: 0,
            funcNum: 13,
            lct: v339,
            onlyIf: true,
            out_tys: [],
            pay: [v338, []],
            sim_p: (async (txn8) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v453, time: v452, didSend: v171, from: v451 } = txn8;
              
              sim_r.txns.push({
                amt: v338,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc1, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v171, from: v451 } = txn8;
          ;
          const v456 = stdlib.addressEq(v320, v451);
          stdlib.assert(v456, {
            at: './index.rsh:99:25:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder4'
            });
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v459, time: v458, didSend: v178, from: v457 } = txn9;
          ;
          ;
          const v466 = stdlib.addressEq(v288, v457);
          stdlib.assert(v466, {
            at: './index.rsh:101:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder4'
            });
          ;
          ;
          return;
          
          
          
          
          }
        else {
          const v486 = stdlib.addressEq(v337, v327);
          if (v486) {
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 15,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v489, time: v488, didSend: v195, from: v487 } = txn8;
            ;
            const v492 = stdlib.addressEq(v327, v487);
            stdlib.assert(v492, {
              at: './index.rsh:107:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder4'
              });
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 16,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
            ;
            ;
            const v502 = stdlib.addressEq(v288, v493);
            stdlib.assert(v502, {
              at: './index.rsh:109:27:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder4'
              });
            ;
            ;
            return;
            
            
            
            
            }
          else {
            return;
            }}}}}
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Bidder5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v285 = stdlib.protect(ctc0, interact.bid, 'for Bidder5\'s interact field bid');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289, v290], secs: v292, time: v291, didSend: v34, from: v288 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v307, v308], secs: v310, time: v309, didSend: v52, from: v306 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v314, v315], secs: v317, time: v316, didSend: v61, from: v313 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v70, from: v320 } = txn5;
  ;
  stdlib.protect(ctc2, await interact.accepttok(v289), {
    at: './index.rsh:63:47:application',
    fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:19:function exp)'],
    msg: 'accepttok',
    who: 'Bidder5'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v288, v289, v299, v306, v313, v320, v285, null],
    evt_cnt: 2,
    funcNum: 5,
    lct: v323,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v328, v329], secs: v331, time: v330, didSend: v79, from: v327 } = txn6;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc3, ctc3, ctc3, ctc3, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v328, v329], secs: v331, time: v330, didSend: v79, from: v327 } = txn6;
  ;
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 6,
    out_tys: [ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v91, from: v336 } = txn7;
  ;
  const v341 = stdlib.addressEq(v288, v336);
  stdlib.assert(v341, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bidder5'
    });
  const v342 = stdlib.addressEq(v337, v299);
  if (v342) {
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v345, time: v344, didSend: v99, from: v343 } = txn8;
    ;
    const v348 = stdlib.addressEq(v299, v343);
    stdlib.assert(v348, {
      at: './index.rsh:74:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder5'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v351, time: v350, didSend: v106, from: v349 } = txn9;
    ;
    ;
    const v358 = stdlib.addressEq(v288, v349);
    stdlib.assert(v358, {
      at: './index.rsh:76:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bidder5'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const v378 = stdlib.addressEq(v337, v306);
    if (v378) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v381, time: v380, didSend: v123, from: v379 } = txn8;
      ;
      const v384 = stdlib.addressEq(v306, v379);
      stdlib.assert(v384, {
        at: './index.rsh:82:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder5'
        });
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v387, time: v386, didSend: v130, from: v385 } = txn9;
      ;
      ;
      const v394 = stdlib.addressEq(v288, v385);
      stdlib.assert(v394, {
        at: './index.rsh:84:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bidder5'
        });
      ;
      ;
      return;
      
      
      
      
      }
    else {
      const v414 = stdlib.addressEq(v337, v313);
      if (v414) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 11,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v417, time: v416, didSend: v147, from: v415 } = txn8;
        ;
        const v420 = stdlib.addressEq(v313, v415);
        stdlib.assert(v420, {
          at: './index.rsh:90:21:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder5'
          });
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 12,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v423, time: v422, didSend: v154, from: v421 } = txn9;
        ;
        ;
        const v430 = stdlib.addressEq(v288, v421);
        stdlib.assert(v430, {
          at: './index.rsh:92:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bidder5'
          });
        ;
        ;
        return;
        
        
        
        
        }
      else {
        const v450 = stdlib.addressEq(v337, v320);
        if (v450) {
          const txn8 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 13,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v171, from: v451 } = txn8;
          ;
          const v456 = stdlib.addressEq(v320, v451);
          stdlib.assert(v456, {
            at: './index.rsh:99:25:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder5'
            });
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v459, time: v458, didSend: v178, from: v457 } = txn9;
          ;
          ;
          const v466 = stdlib.addressEq(v288, v457);
          stdlib.assert(v466, {
            at: './index.rsh:101:23:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bidder5'
            });
          ;
          ;
          return;
          
          
          
          
          }
        else {
          const v486 = stdlib.addressEq(v337, v327);
          if (v486) {
            const txn8 = await (ctc.sendrecv({
              args: [v288, v289, v327, v338],
              evt_cnt: 0,
              funcNum: 15,
              lct: v339,
              onlyIf: true,
              out_tys: [],
              pay: [v338, []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v489, time: v488, didSend: v195, from: v487 } = txn8;
                
                sim_r.txns.push({
                  amt: v338,
                  kind: 'to',
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc1, ctc3, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v489, time: v488, didSend: v195, from: v487 } = txn8;
            ;
            const v492 = stdlib.addressEq(v327, v487);
            stdlib.assert(v492, {
              at: './index.rsh:107:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder5'
              });
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 16,
              out_tys: [],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v495, time: v494, didSend: v202, from: v493 } = txn9;
            ;
            ;
            const v502 = stdlib.addressEq(v288, v493);
            stdlib.assert(v502, {
              at: './index.rsh:109:27:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bidder5'
              });
            ;
            ;
            return;
            
            
            
            
            }
          else {
            return;
            }}}}}
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAUAAEgBEgIEAUDDg0KCwYHAhQTEaCNBiYDAQAAAQEiNQAxGEEI2ClkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQUMQAQGSYEMDEACQEkhCQxAAV1JgQ8MQADfSSEGDEAAeiEGEkQhEDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JFs1/oAEAEVqjrAjNP6ICJI0/zEAEkSxIrIBI7ISJbIQNANXKCCyFDT+shGzsSKyATQDIQRbsggjshA0/7IHs7EisgEishIlshAyCbIVMgqyFDT+shGzQgfDSCERNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/lcoIDX9IQRbNfyABEZHjF6wNPyIB/k0/TEAEkQ0/zT+FlA0/VA0/BZQKEsBVwBQZ0ghEDUBMgY1AkIHgUghEjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JFs1/oAEz4kCILAjNP6IB700/zEAEkSxIrIBI7ISJbIQNANXKCCyFDT+shGzsSKyATQDIQRbsggjshA0/7IHs7EisgEishIlshAyCbIVMgqyFDT+shGzQgbuSSEKDEAAXkghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKCA1/SEEWzX8gAQin5cDsDT8iAcdNP0xABJENP80/hZQNP1QNPwWUChLAVcAUGdIIRI1ATIGNQJCBqVIIQk0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yRbNf6ABMqrzjewIzT+iAbhNP8xABJEsSKyASOyEiWyEDQDVyggshQ0/rIRs7EisgE0AyEEW7III7IQNP+yB7OxIrIBIrISJbIQMgmyFTIKshQ0/rIRs0IGEkkhCwxAANxJIQwMQABeSCEKNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/lcoIDX9IQRbNfyABOPZNjWwNPyIBjo0/TEAEkQ0/zT+FlA0/VA0/BZQKEsBVwBQZ0ghCTUBMgY1AkIFwkghDDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JFs1/oAE00RzI7AjNP6IBf40/zEAEkSxIrIBI7ISJbIQNANXKCCyFDT+shGzsSKyATQDIQRbsggjshA0/7IHs7EisgEishIlshAyCbIVMgqyFDT+shGzQgUvSYEJDEAAXkghCzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKCA1/SEEWzX8gASiBWaOsDT8iAVeNP0xABJENP80/hZQNP1QNPwWUChLAVcAUGdIIQw1ATIGNQJCBOZIIQU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yRbNf6ABBf82y6wIzT+iAUiNP8xABJEsSKyASOyEiWyEDQDVyggshQ0/rIRs7EisgE0AyEEW7III7IQNP+yB7OxIrIBIrISJbIQMgmyFTIKshQ0/rIRs0IEU0klDEACs0khDQxAAahJIQ4MQABeSCEONAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/lcoIDX9IQRbNfyABOIbs6mwNPyIBHU0/TEAEkQ0/zT+FlA0/VA0/BZQKEsBVwBQZ0ghBTUBMgY1AkID/UghDTQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSUpKSVcAIDX/JFs1/lcoIDX9V0ggNfxXaCA1+1eIIDX6V6ggNflJNQVJVwAgNfgkWzX3gARpjYtdNPhQNPcWULA0/zEAEkQ0+DT9EkEAIDT/NP4WUDT9UDT3FlAoSwFXAFBnSCEONQEyBjUCQgN0NPg0/BJBACA0/zT+FlA0/FA09xZQKEsBVwBQZ0ghCzUBMgY1AkIDTDT4NPsSQQAgNP80/hZQNPtQNPcWUChLAVcAUGdIIQo1ATIGNQJCAyQ0+DT6EkEAIDT/NP4WUDT6UDT3FlAoSwFXAFBnSCEGNQEyBjUCQgL8NPg0+RJBACA0/zT+FlA0+VA09xZQKEsBVwBQZ0ghETUBMgY1AkIC1LEisgEishIlshAyCbIVMgqyFDT+shGzQgKeSSEHDEAAg0ghBzQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSUpKVwAgNf8kWzX+VyggNf1XSCA1/FdoIDX7V4ggNfpJNQVJIls1+UgpNfiABFc3DDk0+RZQNPhQsDT/NP4WUDT9UDT8UDT7UDT6UDEAUChLAVcAf2cqSwFXf0lnSCENNQEyBjUCQgIwSCU0ARJENARJIhJMNAISEUQoZCpkUEk1A0lKSVcAIDX/JFs1/lcoIDX9V0ggNfxXaCA1+0k1BUkiWzX6SCk1+YAES/abgTT6FlA0+VCwNP80/hZQNP1QNPxQNPtQMQBQKEsBVwB/ZypLAVd/KWdIIQc1ATIGNQJCAbZJIQ8MQADVSSEIDEAAbkghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKCA1/VdIIDX8STUFSSJbNftIKTX6gATK+StdNPsWUDT6ULA0/zT+FlA0/VA0/FAxAFAoSwFXAH9nKksBV38JZ0glNQEyBjUCQgE6SCEPNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JFs1/lcoIDX9STUFSSJbNfxIKTX7gASYzLb0NPwWUDT7ULA0/zT+FlA0/VAxAFAoSwFXAGhnSCEINQEyBjUCQgDaSSMMQABWSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yRbNf5JNQVJIls1/UgpNfyABGlUbBs0/RZQNPxQsDT/NP4WUDEAUChLAVcASGdIIQ81ATIGNQJCAH5IIROIAMoiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBVs1/oAErNEfwzT/FlA0/hZQsCETiACZsSKyASKyEiWyEDIKshQ0/7IRszEANP8WUChLAVcAKGdIIzUBMgY1AkIAHDEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 200,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v289",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v290",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v289",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v290",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v301",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v307",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v308",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v314",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v315",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v321",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v322",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v329",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v337",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v301",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v307",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v308",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v314",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v315",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v321",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v322",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v329",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v337",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002afd38038062002afd833981016040819052620000269162000212565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b0316838501520151606082015290517fcf195cf82603ce4a4e34c55fad8b41a7c2cc7f7728b1ba77a8eec293c0fa52d59181900360800190a162000094341560076200010b565b604080518082018252600060208083018281523380855286830151516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906200010292919062000135565b505050620002c7565b81620001315760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000143906200028a565b90600052602060002090601f016020900481019282620001675760008555620001b2565b82601f106200018257805160ff1916838001178555620001b2565b82800160010185558215620001b2579182015b82811115620001b257825182559160200191906001019062000195565b50620001c0929150620001c4565b5090565b5b80821115620001c05760008155600101620001c5565b604080519081016001600160401b03811182821017156200020c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200022657600080fd5b62000230620001db565b835181526040601f19830112156200024757600080fd5b62000251620001db565b60208501519092506001600160a01b03811681146200026f57600080fd5b82526040939093015160208083019190915283015250919050565b600181811c908216806200029f57607f821691505b60208210811415620002c157634e487b7160e01b600052602260045260246000fd5b50919050565b61282680620002d76000396000f3fe60806040526004361061010c5760003560e01c8063925876e21161009a578063de73699811610061578063de73699814610242578063e00acef114610255578063e1781d2314610268578063e533a29d1461027b578063f19b43521461028e57005b8063925876e2146101d3578063a035b2e0146101e6578063ab53f2c6146101f9578063abde36fa1461021c578063bf2c5b241461022f57005b80633e499deb116100de5780633e499deb146101725780635465ff65146101855780635471c5a81461019857806383230757146101ab5780638b9fadc8146101c057005b806311faee8c146101155780631e93b0f1146101285780632ac764641461014c5780633a31ddbd1461015f57005b3661011357005b005b610113610123366004612149565b6102a1565b34801561013457600080fd5b506003545b6040519081526020015b60405180910390f35b61011361015a366004612173565b610453565b61011361016d366004612149565b610625565b610113610180366004612173565b6107b2565b610113610193366004612173565b610978565b6101136101a6366004612149565b610af2565b3480156101b757600080fd5b50600154610139565b6101136101ce366004612149565b610c77565b6101136101e1366004612173565b610dfc565b6101136101f4366004612149565b610f90565b34801561020557600080fd5b5061020e6110d6565b6040516101439291906121bb565b61011361022a366004612173565b611173565b61011361023d366004612149565b611537565b610113610250366004612149565b6116bc565b610113610263366004612149565b611841565b610113610276366004612173565b611987565b610113610289366004612149565b611b87565b61011361029c366004612149565b611ccd565b6102b1600e600054146034611e0f565b6102cb813515806102c457506001548235145b6035611e0f565b6000808055600280546102dd906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610309906121f5565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e91906122de565b90507f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf33836040516103a1929190612327565b60405180910390a16103b534156031611e0f565b6103cf6103c83383602001516001611e35565b6032611e0f565b80516103e7906001600160a01b031633146033611e0f565b6103fb816020015182604001516001611e4d565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610438573d6000803e3d6000fd5b506000808055600181905561044f9060029061204c565b5050565b610463600360005414600f611e0f565b61047d8135158061047657506001548235145b6010611e0f565b60008080556002805461048f906121f5565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb906121f5565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b50505050508060200190518101906105209190612344565b90507ffb34c1f9faf20f1618fd1587276cc5a09c90e472f1f6f5335b60d9c379d81a6a33836040516105539291906123eb565b60405180910390a16105673415600e611e0f565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d0151821687528d860151821685523383526004909955436001558b51978801989098529451871699860199909952915185169084015251831695820195909552935116908301529060c0015b6040516020818303038152906040526002908051906020019061061f929190612089565b50505050565b6106356013600054146041611e0f565b61064f8135158061064857506001548235145b6042611e0f565b600080805560028054610661906121f5565b80601f016020809104026020016040519081016040528092919081815260200182805461068d906121f5565b80156106da5780601f106106af576101008083540402835291602001916106da565b820191906000526020600020905b8154815290600101906020018083116106bd57829003601f168201915b50505050508060200190518101906106f291906122de565b90507f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b3383604051610725929190612327565b60405180910390a161073e81606001513414603f611e0f565b610761336001600160a01b031682604001516001600160a01b0316146040611e0f565b61076961210d565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260146000554360015590516105fb91839101612408565b6107c26004600054146012611e0f565b6107dc813515806107d557506001548235145b6013611e0f565b6000808055600280546107ee906121f5565b80601f016020809104026020016040519081016040528092919081815260200182805461081a906121f5565b80156108675780601f1061083c57610100808354040283529160200191610867565b820191906000526020600020905b81548152906001019060200180831161084a57829003601f168201915b505050505080602001905181019061087f9190612443565b90507f52a96f4d91c1c17cf0dc6f68260177e177c4fb5a7369fa4e0df4feedf401cee733836040516108b29291906123eb565b60405180910390a16108c634156011611e0f565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d516001600160a01b03908116808e528f8b015182168a528f8f0151821689528f880151821687528f860151821685523383526005909b55436001558d51998a019a909a52965189169b88019b909b5293518716928601929092525185169084015251831695820195909552935116908301529060e0016105fb565b6109886001600054146009611e0f565b6109a28135158061099b57506001548235145b600a611e0f565b6000808055600280546109b4906121f5565b80601f01602080910402602001604051908101604052809291908181526020018280546109e0906121f5565b8015610a2d5780601f10610a0257610100808354040283529160200191610a2d565b820191906000526020600020905b815481529060010190602001808311610a1057829003601f168201915b5050505050806020019051810190610a4591906124e9565b90507ff75f9b1c70fa45a70ef0adaf150738a5ac6e00c1a147529d67d8011998d522eb3383604051610a789291906123eb565b60405180910390a1610a8c34156008611e0f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015182168452338352600290955543600155875193840194909452905183169582019590955293511690830152906080016105fb565b610b026010600054146038611e0f565b610b1c81351580610b1557506001548235145b6039611e0f565b600080805560028054610b2e906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5a906121f5565b8015610ba75780601f10610b7c57610100808354040283529160200191610ba7565b820191906000526020600020905b815481529060010190602001808311610b8a57829003601f168201915b5050505050806020019051810190610bbf91906122de565b90507f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610bf2929190612327565b60405180910390a1610c0b816060015134146036611e0f565b6040810151610c26906001600160a01b031633146037611e0f565b610c2e61210d565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260116000554360015590516105fb91839101612408565b610c87600d60005414602f611e0f565b610ca181351580610c9a57506001548235145b6030611e0f565b600080805560028054610cb3906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610cdf906121f5565b8015610d2c5780601f10610d0157610100808354040283529160200191610d2c565b820191906000526020600020905b815481529060010190602001808311610d0f57829003601f168201915b5050505050806020019051810190610d4491906122de565b90507f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503383604051610d77929190612327565b60405180910390a1610d9081606001513414602d611e0f565b6040810151610dab906001600160a01b03163314602e611e0f565b610db361210d565b81516001600160a01b0390811682526020808401518216818401526040808501519092168284015260608085015190840152600e6000554360015590516105fb91839101612408565b610e0c600260005414600c611e0f565b610e2681351580610e1f57506001548235145b600d611e0f565b600080805560028054610e38906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610e64906121f5565b8015610eb15780601f10610e8657610100808354040283529160200191610eb1565b820191906000526020600020905b815481529060010190602001808311610e9457829003601f168201915b5050505050806020019051810190610ec99190612556565b90507f073a57eeec0f6c60d8f0a12f6d07370d88a0c76794279a3acb4e186a6034c6973383604051610efc9291906123eb565b60405180910390a1610f103415600b611e0f565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b870151821686528b8b015182168552338352600390975543600155895195860196909652925185169784019790975251831695820195909552935116908301529060a0016105fb565b610fa0601160005414603d611e0f565b610fba81351580610fb357506001548235145b603e611e0f565b600080805560028054610fcc906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff8906121f5565b80156110455780601f1061101a57610100808354040283529160200191611045565b820191906000526020600020905b81548152906001019060200180831161102857829003601f168201915b505050505080602001905181019061105d91906122de565b90507fbceae83a94d4d1f9424beafb2b187ba867236f6cf452b6b01322429f647490043383604051611090929190612327565b60405180910390a16110a43415603a611e0f565b6110be6110b73383602001516001611e35565b603b611e0f565b80516103e7906001600160a01b03163314603c611e0f565b6000606060005460028080546110eb906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054611117906121f5565b80156111645780601f1061113957610100808354040283529160200191611164565b820191906000526020600020905b81548152906001019060200180831161114757829003601f168201915b50505050509050915091509091565b6111836006600054146019611e0f565b61119d8135158061119657506001548235145b601a611e0f565b6000808055600280546111af906121f5565b80601f01602080910402602001604051908101604052809291908181526020018280546111db906121f5565b80156112285780601f106111fd57610100808354040283529160200191611228565b820191906000526020600020905b81548152906001019060200180831161120b57829003601f168201915b505050505080602001905181019061124091906125d6565b90507fec40d7a6cbbc8e238518390da55d1a4bea50dc3b8be33028a1cfa084368a56c0338360405161127392919061269c565b60405180910390a161128734156017611e0f565b805161129f906001600160a01b031633146018611e0f565b6040808201516001600160a01b0316906112be908401602085016126e1565b6001600160a01b0316141561131d576112d561210d565b81516001600160a01b0390811682526020808401518216818401526040808501519092168284015284820135606084015260076000554360015590516105fb91839101612408565b60608101516001600160a01b031661133b60408401602085016126e1565b6001600160a01b031614156113a15761135261210d565b81516001600160a01b0390811682526020808401518216818401526060808501519092166040808501919091528581013592840192909252600a6000554360015590516105fb91839101612408565b60808101516001600160a01b03166113bf60408401602085016126e1565b6001600160a01b03161415611421576113d661210d565b81516001600160a01b0390811682526020808401518216818401526080840151909116604080840191909152848101356060840152600d60005543600155516105fb91839101612408565b60a08101516001600160a01b031661143f60408401602085016126e1565b6001600160a01b031614156114a15761145661210d565b81516001600160a01b03908116825260208084015182168184015260a0840151909116604080840191909152848101356060840152601060005543600155516105fb91839101612408565b60c08101516001600160a01b03166114bf60408401602085016126e1565b6001600160a01b03161415611521576114d661210d565b81516001600160a01b03908116825260208084015182168184015260c0840151909116604080840191909152848101356060840152601360005543600155516105fb91839101612408565b6000808055600181905561044f9060029061204c565b611547600760005414601d611e0f565b6115618135158061155a57506001548235145b601e611e0f565b600080805560028054611573906121f5565b80601f016020809104026020016040519081016040528092919081815260200182805461159f906121f5565b80156115ec5780601f106115c1576101008083540402835291602001916115ec565b820191906000526020600020905b8154815290600101906020018083116115cf57829003601f168201915b505050505080602001905181019061160491906122de565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611637929190612327565b60405180910390a161165081606001513414601b611e0f565b604081015161166b906001600160a01b03163314601c611e0f565b61167361210d565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260086000554360015590516105fb91839101612408565b6116cc600a600054146026611e0f565b6116e6813515806116df57506001548235145b6027611e0f565b6000808055600280546116f8906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054611724906121f5565b80156117715780601f1061174657610100808354040283529160200191611771565b820191906000526020600020905b81548152906001019060200180831161175457829003601f168201915b505050505080602001905181019061178991906122de565b90507f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516117bc929190612327565b60405180910390a16117d5816060015134146024611e0f565b60408101516117f0906001600160a01b031633146025611e0f565b6117f861210d565b81516001600160a01b0390811682526020808401518216818401526040808501519092168284015260608085015190840152600b6000554360015590516105fb91839101612408565b611851600b60005414602b611e0f565b61186b8135158061186457506001548235145b602c611e0f565b60008080556002805461187d906121f5565b80601f01602080910402602001604051908101604052809291908181526020018280546118a9906121f5565b80156118f65780601f106118cb576101008083540402835291602001916118f6565b820191906000526020600020905b8154815290600101906020018083116118d957829003601f168201915b505050505080602001905181019061190e91906122de565b90507f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a3383604051611941929190612327565b60405180910390a161195534156028611e0f565b61196f6119683383602001516001611e35565b6029611e0f565b80516103e7906001600160a01b03163314602a611e0f565b6119976005600054146015611e0f565b6119b1813515806119aa57506001548235145b6016611e0f565b6000808055600280546119c3906121f5565b80601f01602080910402602001604051908101604052809291908181526020018280546119ef906121f5565b8015611a3c5780601f10611a1157610100808354040283529160200191611a3c565b820191906000526020600020905b815481529060010190602001808311611a1f57829003601f168201915b5050505050806020019051810190611a5491906126fe565b90507fab71f41bc98b23ee8ae7c1163ae9981e96ff6e079f03a15276c0fb8d206b8bb13383604051611a879291906123eb565b60405180910390a1611a9b34156014611e0f565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915281516001600160a01b039081168083526020808501518316818501908152604080870151851681870190815260608089015187168189019081526080808b01518916818b0190815260a0808d01518b16818d019081523360c0808f0191825260066000554360015589519b8c019c909c5298518c16978a019790975294518a169388019390935290518816908601525186169084015251841692820192909252905190911660e0820152610100016105fb565b611b976008600054146022611e0f565b611bb181351580611baa57506001548235145b6023611e0f565b600080805560028054611bc3906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054611bef906121f5565b8015611c3c5780601f10611c1157610100808354040283529160200191611c3c565b820191906000526020600020905b815481529060010190602001808311611c1f57829003601f168201915b5050505050806020019051810190611c5491906122de565b90507f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051611c87929190612327565b60405180910390a1611c9b3415601f611e0f565b611cb5611cae3383602001516001611e35565b6020611e0f565b80516103e7906001600160a01b031633146021611e0f565b611cdd6014600054146046611e0f565b611cf781351580611cf057506001548235145b6047611e0f565b600080805560028054611d09906121f5565b80601f0160208091040260200160405190810160405280929190818152602001828054611d35906121f5565b8015611d825780601f10611d5757610100808354040283529160200191611d82565b820191906000526020600020905b815481529060010190602001808311611d6557829003601f168201915b5050505050806020019051810190611d9a91906122de565b90507fda00a95c1dcc12171d6effb435667fe1e6639deaf742996695658fb05741b8d73383604051611dcd929190612327565b60405180910390a1611de134156043611e0f565b611dfb611df43383602001516001611e35565b6044611e0f565b80516103e7906001600160a01b0316331460455b8161044f5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000611e4383853085611e66565b90505b9392505050565b611e58838383611f40565b611e6157600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611ecd916127b7565b60006040518083038185875af1925050503d8060008114611f0a576040519150601f19603f3d011682016040523d82523d6000602084013e611f0f565b606091505b5091509150611f2082826001612011565b5080806020019051810190611f3591906127d3565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611f9f916127b7565b60006040518083038185875af1925050503d8060008114611fdc576040519150601f19603f3d011682016040523d82523d6000602084013e611fe1565b606091505b5091509150611ff282826002612011565b508080602001905181019061200791906127d3565b9695505050505050565b60608315612020575081611e46565b8251156120305782518084602001fd5b60405163100960cb60e01b815260048101839052602401611e2c565b508054612058906121f5565b6000825580601f10612068575050565b601f0160209004906000526020600020908101906120869190612134565b50565b828054612095906121f5565b90600052602060002090601f0160209004810192826120b757600085556120fd565b82601f106120d057805160ff19168380011785556120fd565b828001600101855582156120fd579182015b828111156120fd5782518255916020019190600101906120e2565b50612109929150612134565b5090565b60408051608081018252600080825260208201819052918101829052606081019190915290565b5b808211156121095760008155600101612135565b60006040828403121561215b57600080fd5b50919050565b60006060828403121561215b57600080fd5b60006060828403121561218557600080fd5b611e468383612161565b60005b838110156121aa578181015183820152602001612192565b8381111561061f5750506000910152565b82815260406020820152600082518060408401526121e081606085016020870161218f565b601f01601f1916919091016060019392505050565b600181811c9082168061220957607f821691505b6020821081141561215b57634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461208657600080fd5b805161224a8161222a565b919050565b60006080828403121561226157600080fd5b6040516080810181811067ffffffffffffffff8211171561229257634e487b7160e01b600052604160045260246000fd5b806040525080915082516122a58161222a565b815260208301516122b58161222a565b602082015260408301516122c88161222a565b6040820152606092830151920191909152919050565b6000608082840312156122f057600080fd5b611e46838361224f565b801515811461208657600080fd5b80358252602081013561231a816122fa565b8015156020840152505050565b6001600160a01b038316815260608101611e466020830184612308565b60006080828403121561235657600080fd5b6040516080810181811067ffffffffffffffff8211171561238757634e487b7160e01b600052604160045260246000fd5b60405282516123958161222a565b815260208301516123a58161222a565b602082015260408301516123b88161222a565b604082015260608301516123cb8161222a565b60608201529392505050565b8035825261044f6020830160208301612308565b6001600160a01b038316815260808101611e4660208301846123d7565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060918201519181019190915260800190565b600060a0828403121561245557600080fd5b60405160a0810181811067ffffffffffffffff8211171561248657634e487b7160e01b600052604160045260246000fd5b60405282516124948161222a565b815260208301516124a48161222a565b602082015260408301516124b78161222a565b604082015260608301516124ca8161222a565b606082015260808301516124dd8161222a565b60808201529392505050565b6000604082840312156124fb57600080fd5b6040516040810181811067ffffffffffffffff8211171561252c57634e487b7160e01b600052604160045260246000fd5b604052825161253a8161222a565b8152602083015161254a8161222a565b60208201529392505050565b60006060828403121561256857600080fd5b6040516060810181811067ffffffffffffffff8211171561259957634e487b7160e01b600052604160045260246000fd5b60405282516125a78161222a565b815260208301516125b78161222a565b602082015260408301516125ca8161222a565b60408201529392505050565b600060e082840312156125e857600080fd5b60405160e0810181811067ffffffffffffffff8211171561261957634e487b7160e01b600052604160045260246000fd5b60405282516126278161222a565b815260208301516126378161222a565b6020820152604083015161264a8161222a565b6040820152606083015161265d8161222a565b606082015261266e6080840161223f565b608082015261267f60a0840161223f565b60a082015261269060c0840161223f565b60c08201529392505050565b6001600160a01b03838116825282356020808401919091526080830191908401356126c68161222a565b81811660408501525050604083013560608301529392505050565b6000602082840312156126f357600080fd5b8135611e468161222a565b600060c0828403121561271057600080fd5b60405160c0810181811067ffffffffffffffff8211171561274157634e487b7160e01b600052604160045260246000fd5b604052825161274f8161222a565b8152602083015161275f8161222a565b602082015260408301516127728161222a565b604082015260608301516127858161222a565b606082015260808301516127988161222a565b608082015260a08301516127ab8161222a565b60a08201529392505050565b600082516127c981846020870161218f565b9190910192915050565b6000602082840312156127e557600080fd5b8151611e46816122fa56fea264697066735822122093cf366de89938d93817a7845ddf16a64c470991466f81c45f9338e884aea37b64736f6c634300080c0033`,
  BytecodeLen: 11005,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:36:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:42:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:48:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:54:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:60:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:66:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:73:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:75:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:117:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:81:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:83:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:117:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:89:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:91:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:117:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:98:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:100:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:117:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:106:21:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:108:21:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:117:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  22: {
    at: './index.rsh:117:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bidder1": Bidder1,
  "Bidder2": Bidder2,
  "Bidder3": Bidder3,
  "Bidder4": Bidder4,
  "Bidder5": Bidder5
  };
export const _APIs = {
  };
