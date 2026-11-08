// Search classification only. No activation evaluation or parameter calculation.
const PassiveSkillFilter = (() => {
  const effectPrefix='passive_';
  const effectKinds={performanceBoost:'performance',techniqueBoost:'technique',senseBoost:'sense',allBoost:'all',supportBoost:'support'};
  const targetPrefix='target_';
  function units(card){
    return (card.skills?.passive?.levels || []).filter(l=>[1,2].includes(l.level)&&typeof l.effect?.raw?.type==='string').map(l=>{
      const c=l.condition;
      let condition=null;
      if(c?.referenceState==='present'&&c.state==='observed'&&c.clauses?.length&&c.clauses.every(x=>typeof x.type==='string'&&x.type))condition='yes';
      else if(c?.referenceState==='absent'&&c.state==='unobserved'&&!c.clauses?.length&&!c.hasReference)condition='no';
      const selectors=l.target?.selectors || [],targets=[];
      // self means only self, not a mixed self + other selector.
      if(selectors.length&&selectors.every(s=>s.type===targetPrefix+'self'))targets.push('self');
      if(selectors.some(s=>s.type===targetPrefix+'group'&&typeof s.characterGroupingId==='string'&&s.characterGroupingId.trim()))targets.push('affiliation');
      if(selectors.some(s=>s.type===targetPrefix+'attribute'&&/^(?:cute|pure|happy)$/.test(s.cardAttributeType||'')))targets.push('attribute');
      const type=l.effect.raw.type,kind=type.startsWith(effectPrefix)?type.slice(effectPrefix.length):'';
      return {level:l.level,condition,targets,effect:Object.hasOwn(effectKinds,kind)?effectKinds[kind]:null};
    });
  }
  const empty=()=>({condition:'',targets:[],effects:[]});
  const active=s=>Boolean(s.condition||s.targets.length||s.effects.length);
  function matchesUnits(items,s){
    if(!active(s))return true;
    return items.some(u=>(!s.condition||u.condition===s.condition)&&(!s.targets.length||s.targets.some(t=>u.targets.includes(t)))&&(!s.effects.length||s.effects.includes(u.effect)));
  }
  return {empty,active,units,matchesUnits,matches:(card,s)=>matchesUnits(units(card),s)};
})();
