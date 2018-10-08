const Lint = require('tslint')

class Rule extends Lint.Rules.AbstractRule {
  apply(sourceFile) {
    return this.applyWithWalker(new NoEnumWalker(sourceFile, this.getOptions()))
  }
}

Rule.FAILURE_STRING = 'No Enum allowed'

class NoEnumWalker extends Lint.RuleWalker {
  visitEnumDeclaration(node) {
    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING))
    super.visitEnumDeclaration(node)
  }
}

exports.Rule = Rule

