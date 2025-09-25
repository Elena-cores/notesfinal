db.zips.countDocuments({ pop: { $lt: 1000 } })
8065
db.trips.countDocuments({"birth year": { $gt: 1998 }}) - db.trips.countDocuments({"birth year": { $eq: 1998 }})
6
db.routes.countDocuments({ stops: { $gte: 1 }})
11
db.inspections.countDocuments({ result: "Out of Business", sector: "Home Improvement Contractor - 100"})
4
db.inspections.countDocuments({$and: [{ result: "Out of Business", sector: "Home Improvement Contractor - 100"}]})
4

db.inspections.countDocuments({
  $and: [
    { $or: [ { date: "Feb 20 2015" }, { date: "Feb 21 2015" } ] },
    { sector: { $ne: "Cigarette Retail Dealer - 127" } }
  ]
});
204

db.companies.countDocuments({"$expr": { "$gt": ["$number_of_employees", "$founded_year"] }})
324

db.companies.countDocuments({"$expr": { "$eq": ["$permalink", "$twitter_username"] }})
1299

db.companies.countDocuments({"offices.city": "Seattle"})
117

db.companies.find({"funding_rounds": {$size: 8}}, { name: 1, _id: 0 } )
// mapear para devolver solo el nombre de aquetllas empresas que tienen 8 rondas de financiación